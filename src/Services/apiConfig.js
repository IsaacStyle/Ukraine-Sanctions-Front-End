import axios from "axios";

const Url = 'https://uasanctions.up.railway.app/'


const api = axios.create({
  baseURL: Url,
})

export default api