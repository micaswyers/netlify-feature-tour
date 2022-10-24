exports.handler = async () => {
  // Test making a request to an external API and displaying the response
  const mySecret = process.env.MY_SECRET;
  return {
    statusCode: 200,
    body: `hello world I have a ${mySecret}`,
  };
};
