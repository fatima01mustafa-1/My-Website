#!/bin/bash

# Fatima Mustafa Portfolio Setup Script

echo "🚀 Setting up Fatima Mustafa's Portfolio Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo "   npm run dev    - Start development server"
    echo "   npm run build  - Build for production"
    echo "   npm run start  - Start production server"
    echo ""
    echo "🌐 The website will be available at http://localhost:3005"
else
    echo "❌ Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi
