import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const API_KEY = process.env.RAPID_API_KEY;
const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/";

export const getGeoData = async (perPage, pageNo) => {
  try {
    const response = await axios.get(
      `${BASE_URL}geo/cities?limit=${perPage}&offset=${pageNo}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "2b8f52fcaemshbc415b93668e2c2p13daa0jsn2696cfe41f5b",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching geo data:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

// export const getGeoData = async (perPage, pageNo) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}geo/cities?limit=${perPage}?offset=${pageNo}`,
//       {
//         headers: {
//           "X-RapidAPI-Key":
//             "2b8f52fcaemshbc415b93668e2c2p13daa0jsn2696cfe41f5b",
//           // "X-RapidAPI-Key": API_KEY,
//           "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//         },
//       }
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     //
//   }
// };

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
