export const ROUTERS = {
  HOME: '/',
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
  CHATS: {
    INDEX: 'chats',
    CHAT_ID: (id: string) => `/chats/${id}`,
  }
} as const;
