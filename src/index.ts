import handler from "./handler";

// @ts-ignore - prevent tree shaking this function
globalThis.handler = handler;
