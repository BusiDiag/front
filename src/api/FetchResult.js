import axios from "axios";

async function fetchResult(id) {
  try {
    const response = await axios.get(`/api/result/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching result:", error);
    return null;
  }
}

export default fetchResult;
