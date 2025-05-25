import axios from '../config/axiosConfig'

const create = async (url) => {
  try {
    const res = await axios.post("/api/create", { url });
    return res.data.data;
  } catch (err) {
    throw err;
  }
}

export default create
