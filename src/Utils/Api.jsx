import axios from "axios";

const BASE_URL = `https://www.googleapis.com/customsearch/v1`;

const params = {
  key: `AIzaSyCpac58HoHVgzC9Ct4fmWAC9CG8ui8zTvI`,
  cx: `97d3fe23bacc34cb4`,
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
