#!/bin/bash

# Deploy script for afiframadhan.my.id
# Usage: ./deploy.sh

set -e

echo ""
echo "🚀 Portfolio Deployment Script"
echo "==============================="
echo ""

# Build
echo "🔨 Building production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Git (optional)
read -p "📦 Push to GitHub? (y/n): " push_git
if [ "$push_git" = "y" ] || [ "$push_git" = "Y" ]; then
    read -p "Commit message: " commit_msg
    git add .
    git commit -m "$commit_msg"
    git push
    echo "✅ Pushed to GitHub!"
fi

echo ""

# Upload to server
echo "📤 Uploading to server..."
scp -P 5903 -r out/* afifr1498@103.145.240.110:~/public_html/

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deploy complete!"
    echo "🌐 Visit: https://afiframadhan.my.id"
    echo ""
else
    echo "❌ Upload failed!"
    exit 1
fi
