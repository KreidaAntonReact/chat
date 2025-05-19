import "@packages/event-bas";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      PORT: number
    }
  }
}

export {};

