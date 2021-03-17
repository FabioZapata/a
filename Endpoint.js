// GET Show appoinments [Solo doctor puede hacerlo]
// Headers Authorization
// No necesita body

// POST Create appoinment [Solo doctor]
// Headers AUthorization
// Request
const body = {
                patientId: 3,
                heartPressure: "8/10",
                description: "Se siente mal"
            }

//Response
const body = {
                patientId: 3,
                heartPressure: "8/10",
                description: "Se siente mal",
                diseaseId: 0
                }

// GET Search Patients by Keyword [Doctor]
// Headers authorization
// query para busqueda si no se le envia lo devuelve todo
