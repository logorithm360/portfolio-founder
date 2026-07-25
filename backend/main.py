def main():
    """
    Main function to run the backend server.
    """
    import uvicorn
    from fastapi import FastAPI

    app = FastAPI()

    @app.get("/")
    async def read_root():
        return {"message": "Welcome to the Portfolio Backend!"}