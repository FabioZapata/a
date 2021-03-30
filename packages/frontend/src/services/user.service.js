import axios from "axios"
import { config } from '../config/Constants';

const BASE_URL = config.url.API_URL + "/register";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const token = localStorage.getItem('token');


const configuration = {
  headers: { Authorization: `Bearer ${token}` }
};

export const createPatient = async (body) => {
  return (
    axios.post(BASE_URL,
      body, configuration
    ).then(
      (res) => {
        console.log(res);
        return res.data;
      }
    ).catch(
      (error) => {
        console.log(error);
        return error;
      }
    )
  )
}