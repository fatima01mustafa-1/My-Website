@echo off
echo 🚀 Setting up Fatima Mustafa's Portfolio Website...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🎉 Setup complete! You can now run:
    echo    npm run dev    - Start development server
    echo    npm run build  - Build for production
    echo    npm run start  - Start production server
    echo.
    echo 🌐 The website will be available at http://localhost:3005
) else (
    echo ❌ Failed to install dependencies. Please check your internet connection and try again.
)

pause
