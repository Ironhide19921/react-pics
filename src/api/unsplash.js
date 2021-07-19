import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ddy_gZ-Yla0YrhUZLJ6mhZExyY0Z9SFhLFtZ45ZrMs4",
  },
});
