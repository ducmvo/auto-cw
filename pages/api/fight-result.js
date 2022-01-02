// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from '../../utils/axios'
export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(400).send({ message: 'Only POST requests allowed' })
		return
	}

	try {
		const result = await axios.post('/', req.body)
		res.status(200).json({ targets: result.data })
	} catch (err) {
		console.log(err.response.data)
		res.status(500).send(err.response.data)
	}
}
