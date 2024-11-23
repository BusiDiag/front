import axios from "axios";

async function createBusiness(data) {
  try {
    const response = await axios.post("/api/businesses", data);
    return response;
  } catch (error) {
    console.error("Failed to create business");
    console.log(error);
    return null;
  }
}

export default createBusiness;
