import axios from "axios"
import { config } from '../config/constants';

const BASE_URL = config.url.API_URL;
const CREATE_URL = BASE_URL + "/api/create-patient";
const FETCH_URL = BASE_URL + "/api/patient";
const CREATE_APP_URL = BASE_URL + "/api/appoinments/create";
const FETCH_APP_URL = BASE_URL + "/api/appoinments"


axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const token = localStorage.getItem('token');


const configuration = {
  headers: { Authorization: `Bearer ${token}` }
};

export const createPatient = async (body) => {
  return (
    axios.post(CREATE_URL,
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
};


export const getPatients = async () => {
  return (
    axios.get(FETCH_URL,
      configuration
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
};

export const getPatient = async (id) => {
  return (
    axios.get(FETCH_URL+ `/${id}`,
      configuration
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
};


export const createAppointment = async (body) => {
  return (
    axios.post(CREATE_APP_URL,
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
};


export const getAppointments = async () => {
  return (
    axios.get(FETCH_APP_URL,
      configuration
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
};
