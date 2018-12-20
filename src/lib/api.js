import crypto from "crypto-js";
import config from "../config";

const URL = () => {
  const BASE_URL_1 = "https://gateway.marvel.com:443/v1/public/";
  const QUERY = "comics?format=comic&formatType=comic&dateDescriptor=thisWeek";
  const timestamp = new Date().getTime();
  const HASH = crypto.MD5(timestamp + config.privateKey + config.publicKey);
  const AUTH = `&ts=${timestamp}&apikey=${config.publicKey}&hash=${HASH}`;
  console.log(AUTH);
  return `${BASE_URL_1}${QUERY}${AUTH}`;
};

const urlTitle = title => {
  const BASE_URL_1 = "https://gateway.marvel.com:443/v1/public/";
  const QUERY = `comics?format=comic&formatType=comic&noVariants=true&title=${title}&orderBy=title`;
  const timestamp = new Date().getTime();
  const HASH = crypto.MD5(timestamp + config.privateKey + config.publicKey);
  const AUTH = `&ts=${timestamp}&apikey=${config.publicKey}&hash=${HASH}`;
  return `${BASE_URL_1}${QUERY}${AUTH}`;
};

class api {
  fetchData = async () => {
    try {
      const response = await fetch(URL());
      const rawData = await response.json();
      const data = rawData.data.results;
      return data;
    } catch (e) {
      let message = e;
      return message;
    }
  };
  getByTitle = async title => {
    try {
      const response = await fetch(urlTitle(title));
      const rawData = await response.json();
      const data = rawData.data;
      console.log(data);
      return data;
    } catch (e) {
      let message = e;
      return message;
    }
  };
}

export default new api();