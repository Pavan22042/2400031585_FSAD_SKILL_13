# Skill 13 - Deployment of Full-Stack Application

Deployment-ready student management app built with React and Spring Boot.

## Project Structure
- `frontend/` -> React app with environment variable support
- `backend/` -> Spring Boot backend that can be packaged as a JAR

## Environment Variable
Create `.env` in `frontend/` if you want a custom backend URL:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

## Development Run Order

### Backend
```bash
cd "/Users/kunkalapavankumar/FULL STACK SKILL/Skill-13/backend"
mvn spring-boot:run
```

### Frontend
```bash
cd "/Users/kunkalapavankuma/FULL STACK SKILL/Skill-13/frontend"
npm install
npm run dev
```

## Production Build

### Package frontend
```bash
cd "/Users/kunkalapavankuma/FULL STACK SKILL/Skill-13/frontend"
npm install
npm run build
```

### Package backend JAR
```bash
cd "/Users/kunkalapavankuma/FULL STACK SKILL/Skill-13/backend"
mvn clean package
```

### Run backend JAR
```bash
cd "/Users/kunkalapavankuma/FULL STACK SKILL/Skill-13/backend"
java -jar target/skill13-backend-1.0.0.jar
```

The React `dist/` output can be served using Nginx, Apache, or any static file host.
