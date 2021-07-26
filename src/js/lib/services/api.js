import $ from '../core';
const axios = require('axios');

$.prototype.get = async function (url) {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

$.prototype.post = async function (url, data) {
  try {
    const response = await axios.post(url, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

$.prototype.requestsGet = async function (urls) {
  const requests = urls.map((url) => axios.get(url));
  try {
    const response = await Promise.all(requests);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
