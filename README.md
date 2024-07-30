## Getting Started

1. **Node.js Version**: Ensure you have Node.js version 16 or higher installed.
2. **Clone the Repository**: Clone this repository into a folder of your choice using:
   ```bash
   git clone https://github.com/tchai81/task-management-backend.git <FOLDER_PATH>
   ```
3. **Install Dependencies**: Navigate to the project directory and run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```
4. **Environment Configuration**:
   - Rename `.env.example` to `.env`.
   - Update the variables in `.env`. Specifically, the db settings.
5. **Run the Development Server**: Start the development server with:
   ```bash
   npm run start:dev
   ```
6. **Production Build**: To prepare your application for production, run the following command to build the necessary assets:
   ```bash
   npm run build
   ```
7. **Start the Production Server**: Once built, start the server on your production environment using:
   ```bash
   npm run start
   ```
8. You can access the development server by navigating to: http://localhost:<APP_PORT>

9. This app contains the following api endpoints:

## API Endpoints

### Get a Task

```http
GET http://localhost:<APP_PORT>/task/get/{taskId}
```

### Get All Tasks

```http
GET http://localhost:<APP_PORT>/task/get
```

### Create a Task

```http
POST http://localhost:<APP_PORT>/task
```

**Sample Payload:**

```json
{
  "title": "test1",
  "description": "test1 description",
  "priority": 1,
  "status": 1
}
```

### Update a Task

```http
PATCH http://localhost:<APP_PORT>/task/{taskId}
```

**Sample Payload:**

```json
{
  "title": "test1",
  "description": "test1 description",
  "priority": 1,
  "status": 1
}
```
