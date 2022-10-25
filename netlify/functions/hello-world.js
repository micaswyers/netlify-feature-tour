exports.handler = async () => {
  // Test making a request to an external API and displaying the response
  const Http = new XMLHttpRequest();
  const mySecret = process.env.MY_SECRET;
  const url = "https://the-one-api.dev/v2/book";
  Http.open("GET", url);
  Http.send();
  return {
    statusCode: 200,
    body: `hello world I have a ${mySecret}`,
    book: Http.responseText,
  };
};
