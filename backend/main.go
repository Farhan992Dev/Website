package main

import (
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func SeedAdmin() {
	var count int64
	DB.Model(&User{}).Count(&count)
	if count == 0 {
		hash, _ := HashPassword("admin123")
		admin := User{
			Username:     "admin",
			PasswordHash: hash,
		}
		DB.Create(&admin)
		log.Println("Created default admin user: admin / admin123")
	}
}

func main() {
	godotenv.Load()
	InitDB()
	SeedAdmin()

	// Start a ticker for background cleanup every 24 hours
	go func() {
		ticker := time.NewTicker(24 * time.Hour)
		for range ticker.C {
			CleanupLogs()
			log.Println("Cleaned up old visitor logs")
		}
	}()

	r := gin.Default()

	// CORS config for frontend
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // adjust as needed
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	api := r.Group("/api")
	{
		api.POST("/auth/login", Login)
		api.POST("/log", LogVisitor)
		
		// Public endpoints for frontend (can be cached)
		api.GET("/settings", GetSettings)
		api.GET("/projects", GetProjects)

		// Protected endpoints
		admin := api.Group("/")
		admin.Use(AuthMiddleware())
		{
			admin.PUT("/settings", UpdateSetting)
			admin.POST("/projects", CreateProject)
			admin.DELETE("/projects/:id", DeleteProject)
		}
	}

	r.Run(":8081") // Listen and serve on 0.0.0.0:8081
}
