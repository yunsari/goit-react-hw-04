import axios from "axios";
import { toast } from "react-hot-toast";

const API_KEY = "MQK6NgCIsma-gN_bq9uJmUU0ZFeiBN7HkkEhtKYnmN4";
const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 15,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    
    return response.data;

  } catch (error) {
    console.error("Bir Hata Oluştu!:", error.message);
     toast.error("Bir hata oluştu! Lütfen tekrar deneyin.");
    throw error;
  }
};
