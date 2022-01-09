import axios from 'axios'
import mock from './mocks/flight.json';

const getParams = (flight: string) => ({
	access_key: process.env.API_KEY,
	flight_iata: flight,
})

const BASE_URL = 'http://api.aviationstack.com/v1'

export function getFlight(flight: string): Promise<any> {
	if(process.env.NODE_ENV === 'development'){
		return Promise.resolve(mock);
	}
	const params = getParams(flight)
	return axios.get(`${BASE_URL}/flights`, { params }).then((response) => {
		const resp = response.data
		if (Array.isArray(resp.data) && resp.data.length) {
			return resp.data[0]
		}
		return {}
	})
}
