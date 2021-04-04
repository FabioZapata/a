import axios from "axios"
import { config } from '../config/constants';

const BASE_URL = config.url.API_URL + "/api/create";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

export const create = async (body) => {
  return (
    axios.post(BASE_URL,
      body
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