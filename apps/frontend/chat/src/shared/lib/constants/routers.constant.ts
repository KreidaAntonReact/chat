export const ROUTERS = {
  HOME: '/',
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
  CHATS: {
    INDEX: 'chats',
    CHAT_MEMBER_ID: (alias: string) => `chats/${alias}`,
  }
} as const;
