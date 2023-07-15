import axios from "axios";


const customUrl = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
}); 

export default customUrl