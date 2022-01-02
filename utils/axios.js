import axios from 'axios'
const baseUrl =
	(process.env.NODE_ENV === 'development' && 'http://localhost:8000') || 'https://cw-calculator.herokuapp.com'
const customAxios = axios.create({
	baseURL: baseUrl
})

export default customAxios
