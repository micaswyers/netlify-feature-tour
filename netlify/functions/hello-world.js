const axios = require('axios');

exports.handler = async () => {
  // Test making a request to an external API and displaying the response
  const Url = "https://the-one-api.dev/v2/book";
  const response = await axios.get(Url);
  const { docs } = response.data;

  return {
    statusCode: 200,
   body: `The first LOTR book is ${docs[0].name}`,
  };
};