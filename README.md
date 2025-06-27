# Scalian Backend

A NestJS backend for candidate data upload and validation.

## Features

- Upload candidate data via Excel file and form fields
- Validates:
  - Name and surname (from form)
  - Seniority (junior or senior)
  - Years of experience (>= 0)
  - Availability (boolean)
- Functional and reactive programming patterns
- REST API with `/api` global prefix

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000/api` by default.

## Usage

### Upload Candidate Endpoint

- **POST** `/api/candidates/upload`
- **Body (form-data):**
  - `name`: string
  - `surname`: string
  - `file`: Excel file (.xlsx) with columns: seniority, years, availability (one row)

#### Example with Postman

- Set method to POST and URL to `http://localhost:3000/api/candidates/upload`
- In the Body tab, select `form-data` and add:
  - `name` (Text)
  - `surname` (Text)
  - `file` (File)

#### Example Response

```json
{
  "name": "JOHN",
  "surname": "DOE",
  "seniority": "junior",
  "years": 2,
  "availability": true
}
```

## Testing

Run all tests:

```bash
npm test
```
