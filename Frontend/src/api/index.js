/* eslint-disable prettier/prettier */
//to centralise the api , so we can change the data in every place by changing one place.
import axios from 'axios';
const BACKEND_API_URL = 'https://cityguidedhaka.herokuapp.com/api/v1';
// import store from '../redux/store';
// import { authConstants } from '../redux/actions/constant';

const axiosInstance = axios.create({
    baseURL: BACKEND_API_URL,
    headers: {
        'Content-type': 'application/json',
        // Authorization: token ? `Bearer ${token}` : '',
    },
});
export default axiosInstance;
