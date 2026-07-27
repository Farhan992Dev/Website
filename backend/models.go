package main

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	ID           uint   `gorm:"primaryKey"`
	Username     string `gorm:"type:varchar(255);uniqueIndex;not null"`
	PasswordHash string `gorm:"not null"`
}

type VisitorLog struct {
	ID        uint      `gorm:"primaryKey"`
	IPAddress string    `gorm:"type:varchar(255);not null"`
	UserAgent string
	Path      string    `gorm:"type:varchar(255)"`
	VisitedAt time.Time `gorm:"index;autoCreateTime"`
}

type Setting struct {
	ID          uint   `gorm:"primaryKey"`
	SectionName string `gorm:"type:varchar(255);uniqueIndex;not null"`
	IsVisible   bool   `gorm:"default:true"`
}

type Project struct {
	ID       uint   `gorm:"primaryKey"`
	Title    string `gorm:"not null"`
	Category string
	Href     string
}

func Migrate(db *gorm.DB) {
	db.AutoMigrate(&User{}, &VisitorLog{}, &Setting{}, &Project{})
}
