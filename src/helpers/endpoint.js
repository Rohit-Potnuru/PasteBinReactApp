const ENDPOINT = 'http://44.206.235.16'
const PORT = 8080
const PORT_GET = 8081

// API Endpoints
const API = ENDPOINT + ':' + PORT + '/api'
const GET_API = ENDPOINT + ':' + PORT_GET + '/api/'

// Register APIs
const REGISTER = API + '/register'
const REGISTER_CONFIRM = API + '/register/confirm'

// Update APIs
const UPDATE = API + '/update'
const UPDATE_CONFIRM = API + '/update/confirm'

export { REGISTER, REGISTER_CONFIRM, UPDATE, UPDATE_CONFIRM, GET_API }