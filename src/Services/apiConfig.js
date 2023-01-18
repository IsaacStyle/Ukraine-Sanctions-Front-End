import axios from "axios";

const Url = 'https://api-project-production-8128.up.railway.app/'


const api = axios.create({
  baseURL: Url,
})

export default api