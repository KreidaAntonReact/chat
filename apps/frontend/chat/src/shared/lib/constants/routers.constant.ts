export const ROUTERS = {
  HOME: '/',
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
  CHATS: {
    INDEX: 'chats',
    CHAT_MEMBER_ID: (id: string) => `chats/${id}`,
  }
} as const;
