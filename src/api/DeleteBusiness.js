import axios from "axios";

async function deleteBusinesses(id) {
  try {
    const response = await axios.delete(`/api/businesses/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to delete business");
    console.log(error);
    return null;
  }
}

export default deleteBusinesses;
