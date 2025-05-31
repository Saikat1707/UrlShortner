import axios from '../config/axiosConfig'

const create = async (url,slag) => {
  try {
    const res = await axios.post("/api/create", { url,slag});
    return res.data.data;
  } catch (err) {
    throw err;
  }
}

export default create
