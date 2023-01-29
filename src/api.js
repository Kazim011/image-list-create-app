import axios from "axios";

const searchİmages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MdQzigttnhnaRQeDcu0Yx-Z8jMXYkkaurQoaLRxIM9U",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchİmages;
