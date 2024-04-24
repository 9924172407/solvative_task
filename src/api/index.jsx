import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.RAPID_API_KEY;

export const getGeoData = async (perPage, pageNo) => {
  try {
    const response = await axios.get(
      `${BASE_URL}geo/cities?limit=${perPage}&offset=${pageNo}`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching geo data:", error);
    throw error;
  }
};


// below api is not working
// export const getCountryFlag = async (Id) => {
//     console.log(Id);
//   try {
//     const response = await axios.get(
//       `https://www.countryflagsapi.io/png/in`
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     //
//   }
// };
