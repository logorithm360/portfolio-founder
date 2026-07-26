from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import uvicorn

app = FastAPI(title="Portfolio Backend", description="Backend APIs for the Portfolio web application")

# Support CORS for local development environments
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# InMemory Database for contact submissions
contact_submissions = []

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
async def read_root():
    return {
        "status": "online",
        "message": "Welcome to the Portfolio Backend Service!"
    }

@app.post("/api/contact")
async def receive_contact_message(payload: ContactMessage):
    if not payload.name or not payload.email or not payload.message:
        raise HTTPException(status_code=400, detail="All message fields are required.")

    # Store submission
    contact_submissions.append({
        "name": payload.name,
        "email": payload.email,
        "message": payload.message
    })

    return {
        "status": "success",
        "message": "Message received successfully. Thank you!"
    }

@app.get("/api/contact/messages")
async def get_messages():
    # Helper endpoint to view submitted messages during testing
    return {
        "count": len(contact_submissions),
        "messages": contact_submissions
    }

def main():
    """
    Main function to run the backend server.
    """
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
