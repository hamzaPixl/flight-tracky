import axios from 'axios'

const getParams = (flight: string) => ({
	access_key: process.env.API_KEY,
	flight_iata: flight,
})

const BASE_URL = 'http://api.aviationstack.com/v1'

export function getFlight(flight: string): Promise<any> {
	const params = getParams(flight)
	return axios.get(`${BASE_URL}/flights`, { params }).then((response) => {
		const resp = response.data
		console.log(resp)
		if (Array.isArray(resp.data) && resp.data.length) {
			return resp.data[0]
		}
		return {}
	})
}
