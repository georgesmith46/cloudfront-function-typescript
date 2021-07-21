import { ResponseHandler } from "./types";
import randomNumber from "./randomNumber";

const handler: ResponseHandler = (event) => {
  let response = event.response;
  let headers = response.headers;

  // add a random number header
  if (!headers["random-number"]) {
    headers["random-number"] = { value: randomNumber.toString() };
  }

  return response;
};

// @ts-ignore - prevent tree shaking this function
globalThis.handler = handler;
