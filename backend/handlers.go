package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type LoginInput struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func Login(c *gin.Context) {
	var input LoginInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user User
	if err := DB.Where("username = ?", input.Username).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
		return
	}

	if !CheckPasswordHash(input.Password, user.PasswordHash) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
		return
	}

	token, err := GenerateJWT(user.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

// Log Visitor IP
func LogVisitor(c *gin.Context) {
	ip := c.ClientIP()
	userAgent := c.Request.UserAgent()
	path := c.Query("path")

	log := VisitorLog{
		IPAddress: ip,
		UserAgent: userAgent,
		Path:      path,
	}

	if err := DB.Create(&log).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to log visitor"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Visitor logged"})
}

func CleanupLogs() {
	sevenDaysAgo := time.Now().AddDate(0, 0, -7)
	if err := DB.Where("visited_at < ?", sevenDaysAgo).Delete(&VisitorLog{}).Error; err != nil {
		// Log error, but proceed
	}
}

// Settings
func GetSettings(c *gin.Context) {
	var settings []Setting
	DB.Find(&settings)
	c.JSON(http.StatusOK, settings)
}

func UpdateSetting(c *gin.Context) {
	var input Setting
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := DB.Where("section_name = ?", input.SectionName).FirstOrCreate(&Setting{SectionName: input.SectionName}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to find or create setting"})
		return
	}

	DB.Model(&Setting{}).Where("section_name = ?", input.SectionName).Update("is_visible", input.IsVisible)
	c.JSON(http.StatusOK, gin.H{"message": "Setting updated"})
}

// Projects
func GetProjects(c *gin.Context) {
	var projects []Project
	DB.Find(&projects)
	c.JSON(http.StatusOK, projects)
}

func CreateProject(c *gin.Context) {
	var project Project
	if err := c.ShouldBindJSON(&project); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := DB.Create(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create project"})
		return
	}
	c.JSON(http.StatusCreated, project)
}

func DeleteProject(c *gin.Context) {
	id := c.Param("id")
	if err := DB.Delete(&Project{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete project"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Project deleted"})
}
