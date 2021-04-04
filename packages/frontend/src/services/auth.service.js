import axios from "axios"
import { config } from '../config/constants';

const BASE_URL = config.url.API_URL + "/api/login";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};


// Send information with body{ email, password }

export const login = async (body, setAuthToken, setSessionUserData) => {
  const foundUser = {  
    id: 1,
    firstName: "Jorge",
    lastName: "Vargas",
    email: "jorgevargas@hotmail.com",
    carnet: "f12345113",
  };
  setAuthToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkRvY3RvciIsImlhdCI6MTYxNjk3ODM0MywiZXhwIjoxNjE2OTgxOTQzfQ.TMhZzFy4gwY7ujnGvxitSfxEclAg9GpBjg-g5lEqkG0");
  setSessionUserData(foundUser);
  return {
    success: true,
  }
  // return axios.post(BASE_URL, body).then(
  //   (res) => {
  //     console.log(res);
  //     //setAuthToken(foundUser.login.uuid);
  //     //setSessionUserData(foundUser);
  //     return res.data;
  //   }
  // ).catch(
  //   (error) => {
  //     console.log("login error", error);
  //   }
  // );
};


// Only verify if token exists, then verify is token 
// is still valid 

export const autoLogin = () => {
  return localStorage.getItem("token");
};


// Call it when you want to log out 

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}