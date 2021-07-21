import handler from "./handler";

const exampleEvent = {
  version: "1.0",
  context: {
    distributionDomainName: "d111111abcdef8.cloudfront.net",
    distributionId: "EDFDVBD6EXAMPLE",
    eventType: "viewer-response",
    requestId: "EXAMPLEntjQpEXAMPLE_SG5Z-EXAMPLEPmPfEXAMPLEu3EqEXAMPLE==",
  },
  viewer: {
    ip: "198.51.100.11",
  },
  request: {
    method: "GET",
    uri: "/test",
    querystring: {},
    headers: {},
    cookies: {},
  },
  response: {
    statusCode: 200,
    statusDescription: "",
    headers: {},
    cookies: {},
  },
};

describe("handler", () => {
  test("it should set the random-number header", () => {
    const response = handler(exampleEvent);
    expect(response.headers).toHaveProperty("random-number");
  });
});
