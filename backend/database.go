package main

import (
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	// First, connect without specifying a database to create the database if it doesn't exist
	dsnWithoutDB := "root:my-secret-pw@tcp(127.0.0.1:3306)/?charset=utf8mb4&parseTime=True&loc=Local"
	tempDB, err := gorm.Open(mysql.Open(dsnWithoutDB), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to MySQL server:", err)
	}

	tempDB.Exec("CREATE DATABASE IF NOT EXISTS portfolio;")

	dsn := os.Getenv("DB_DSN")
	if dsn == "" {
		dsn = "root:my-secret-pw@tcp(127.0.0.1:3306)/portfolio?charset=utf8mb4&parseTime=True&loc=Local"
	}
	
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	Migrate(DB)
	log.Println("Database connected and migrated successfully")
}
