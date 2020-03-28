import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
//https://api.spacexdata.com/v3/rockets/{{rocket_id}}

const serviceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

const rocketService = {
  get: (id) => api.get(`${serviceUrl}/${id}`)
};

export default rocketService;
