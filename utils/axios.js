import axios from 'axios'
const baseUrl =
	(process.env.NODE_ENV === 'development' && 'http://localhost:8000') || ''
const customAxios = axios.create({
	baseURL: baseUrl
})

export default customAxios
