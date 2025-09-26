#!/usr/bin/env python3
"""
Test script to verify FastAPI backend setup
"""
import sys
import os

# Add the backend2 directory to Python path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend2'))

try:
    print("Testing FastAPI backend setup...")
    
    # Test environment loading
    from dotenv import load_dotenv
    load_dotenv('backend2/.env')
    print("✓ Environment variables loaded successfully")
    
    # Test basic imports
    from fastapi import FastAPI
    print("✓ FastAPI imported successfully")
    
    from motor.motor_asyncio import AsyncIOMotorClient  
    print("✓ Motor (MongoDB async driver) imported successfully")
    
    from clerk_backend_api import Clerk
    print("✓ Clerk backend API imported successfully")
    
    # Test app creation
    from backend2.main import app
    print("✓ FastAPI app created successfully")
    
    print("\n🎉 All tests passed! FastAPI backend is ready to run.")
    print("Start the server with: cd backend2 && python -m uvicorn main:app --host 127.0.0.1 --port 5001 --reload")
    
except ImportError as e:
    print(f"❌ Import error: {e}")
    print("Please make sure all dependencies are installed.")
except Exception as e:
    print(f"❌ Error: {e}")
    print("There might be an issue with the configuration.")