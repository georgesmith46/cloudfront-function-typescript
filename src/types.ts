type LooseObject = Record<
  string,
  string | Record<string, string | Record<string, string>[]>
>;

interface RequestEvent {
  version: string;
  context: {
    distributionDomainName: string;
    distributionId: string;
    eventType: string;
    requestId: string;
  };
  viewer: {
    ip: string;
  };
  request: {
    method: string;
    uri: string;
    querystring: LooseObject;
    headers: LooseObject;
    cookies: LooseObject;
  };
}

interface ResponseEvent extends RequestEvent {
  response: {
    statusCode: number;
    statusDescription: string;
    headers: LooseObject;
    cookies: LooseObject;
  };
}

export type RequestHandler = (event: RequestEvent) => RequestEvent["request"];
export type ResponseHandler = (
  event: ResponseEvent
) => ResponseEvent["response"];
