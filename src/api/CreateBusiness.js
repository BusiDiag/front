import axios from "axios";

async function createBusiness(data) {
  try {
    const response = await axios.post("/api/businesses", data);
    return response.json();
  } catch (error) {
    console.error("Failed to create business");
    return null;
  }
}

export default createBusiness;
