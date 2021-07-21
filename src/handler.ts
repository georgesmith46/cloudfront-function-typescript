import { ResponseHandler } from "./types";

const randomNumber = Math.floor(Math.random() * 100).toString();

const handler: ResponseHandler = (event) => {
  let response = event.response;
  let headers = response.headers;

  // add a random number header
  if (!headers["random-number"]) {
    headers["random-number"] = { value: randomNumber };
  }

  return response;
};

export default handler;
