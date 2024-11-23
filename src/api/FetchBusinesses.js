import axios from "axios";

async function fetchBusinesses() {
  try {
    const response = await axios.get("/api/businesses");
    console.log("Received: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
}

export default fetchBusinesses;
