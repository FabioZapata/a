// Create user doctor
// [POST] /api/create
// Content-Type: application/json

//Body
const body = {
        "firstName": "Jorge",
        "lastName": "Vargas",
        "email": "jorgevargas@hotmail.com",
        "password": "1234",
        "carnet": "f12345113",
        "gender": "Male"
    }

//Response
const body = {
    "message": "Created"
}

// Login Doctor
// [GET] /api/login
// Content-Type: application/json

//Body
const body = {
    "email": "jorgevargas@hotmail.com",
    "password": "1234"
}

//Response
const body = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkRvY3RvciIsImlhdCI6MTYxNjk3ODM0MywiZXhwIjoxNjE2OTgxOTQzfQ.TMhZzFy4gwY7ujnGvxitSfxEclAg9GpBjg-g5lEqkG0",
    "doctor": {
        "id": 1,
        "firstName": "Jorge",
        "lastName": "Vargas",
        "email": "jorgevargas@hotmail.com",
        "carnet": "f12345113"
    }
}

// Create patient [Doctor]
// [POST] /api/create-patient
// Content-Type: application/json
// Authorization Bearer

//Body
const body = {
    "firstName": "Ana",
    "lastName": "Pena",
    "gender": "Female",
    "description": "Es una persona diabetica tipo 2."
}

//Response
const body = {
    "message": "Created"
}

// Get all patient or by keyword [DOCTOR]
// GET /api/patient
// GET /api/patient?search=Ba
// Content-Type: application/json
// Authorization Bearer

//Body
const body = {}

//Response
const body = [
    {
        "id": 1,
        "isActive": true,
        "firstName": "Katherine",
        "lastName": "Pena",
        "birthday": null,
        "gender": "F",
        "description": "Es una persona diabetica tipo 2."
    },
    {
        "id": 2,
        "isActive": true,
        "firstName": "Ana",
        "lastName": "Pena",
        "birthday": null,
        "gender": "F",
        "description": "Es una persona diabetica tipo 2."
    }
]

//Create appoinment
// [POST] /api/appoinments/create
// Content-Type: multipart/form-data
//Authorization Bearer

//Request
// patientId: 1
// heartPressure: 8/10
// description: Segunda prueba
// file: IMAGE

// Response
const body = {
    "message": "Created"
}

// Get all appoinments [DOCTOR]
// [GET] /api/appoinments
// Content-Type: application/json
// Authorization Bearer

// Request
const body = {}

// Response
const body = [
    {
        "heartPressure": "8/10",
        "visitDay": "2021-03-28T20:54:56.329Z",
        "description": "Paciente con problemas cardiacos",
        "doctor": {
            "id": 1,
            "isActive": true,
            "createdAt": "2021-03-28T19:55:56.366Z",
            "updateAt": "2021-03-28T19:55:56.366Z",
            "firstName": "Keyner",
            "lastName": "Baez",
            "email": "skerling0719@hotmail.com",
            "password": "$2b$10$VkoKE3GAxYAcwGB/J4WWFeHjfRJqjxf1bD4vU8lCF3Y8wKjdnii5G",
            "carnet": "f12345112",
            "gender": "F",
            "birthday": null,
            "isVerified": true
        }
    },
    {
        "heartPressure": "8/10",
        "visitDay": "2021-03-28T20:55:23.513Z",
        "description": "Paciente con problemas cardiacos",
        "doctor": {
            "id": 1,
            "isActive": true,
            "createdAt": "2021-03-28T19:55:56.366Z",
            "updateAt": "2021-03-28T19:55:56.366Z",
            "firstName": "Keyner",
            "lastName": "Baez",
            "email": "skerling0719@hotmail.com",
            "password": "$2b$10$VkoKE3GAxYAcwGB/J4WWFeHjfRJqjxf1bD4vU8lCF3Y8wKjdnii5G",
            "carnet": "f12345112",
            "gender": "F",
            "birthday": null,
            "isVerified": true
        }
    },
    {
        "heartPressure": "8/10",
        "visitDay": "2021-03-28T21:00:44.244Z",
        "description": "Paciente con problemas cardiacos",
        "doctor": {
            "id": 1,
            "isActive": true,
            "createdAt": "2021-03-28T19:55:56.366Z",
            "updateAt": "2021-03-28T19:55:56.366Z",
            "firstName": "Keyner",
            "lastName": "Baez",
            "email": "skerling0719@hotmail.com",
            "password": "$2b$10$VkoKE3GAxYAcwGB/J4WWFeHjfRJqjxf1bD4vU8lCF3Y8wKjdnii5G",
            "carnet": "f12345112",
            "gender": "F",
            "birthday": null,
            "isVerified": true
        }
    },
    {
        "heartPressure": "8/10",
        "visitDay": "2021-03-28T21:01:22.106Z",
        "description": "Segunda prueba",
        "doctor": {
            "id": 1,
            "isActive": true,
            "createdAt": "2021-03-28T19:55:56.366Z",
            "updateAt": "2021-03-28T19:55:56.366Z",
            "firstName": "Keyner",
            "lastName": "Baez",
            "email": "skerling0719@hotmail.com",
            "password": "$2b$10$VkoKE3GAxYAcwGB/J4WWFeHjfRJqjxf1bD4vU8lCF3Y8wKjdnii5G",
            "carnet": "f12345112",
            "gender": "F",
            "birthday": null,
            "isVerified": true
        }
    }
]


