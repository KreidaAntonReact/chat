-- CreateEnum
CREATE TYPE "ENUM_TYPE_CHAT" AS ENUM ('DIRECT', 'GROUP');

-- CreateEnum
CREATE TYPE "ENUM_STATUS_FRIENDSHIP" AS ENUM ('ACCESS', 'PENDING', 'REJECT');

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "chatType" "ENUM_TYPE_CHAT" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "participantOneId" TEXT,
    "participantTwoId" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friendship" (
    "id" TEXT NOT NULL,
    "status" "ENUM_STATUS_FRIENDSHIP" NOT NULL DEFAULT 'PENDING',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Chat_participantOneId_createAt_idx" ON "Chat"("participantOneId", "createAt");

-- CreateIndex
CREATE INDEX "Chat_participantTwoId_createAt_idx" ON "Chat"("participantTwoId", "createAt");

-- CreateIndex
CREATE UNIQUE INDEX "Message_userId_key" ON "Message"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Message_chatId_key" ON "Message"("chatId");

-- CreateIndex
CREATE INDEX "Message_chatId_createAt_idx" ON "Message"("chatId", "createAt");

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_userId_key" ON "Friendship"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_friendId_key" ON "Friendship"("friendId");

-- CreateIndex
CREATE INDEX "Friendship_userId_createAt_idx" ON "Friendship"("userId", "createAt");

-- CreateIndex
CREATE INDEX "Friendship_friendId_createAt_idx" ON "Friendship"("friendId", "createAt");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_participantOneId_fkey" FOREIGN KEY ("participantOneId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_participantTwoId_fkey" FOREIGN KEY ("participantTwoId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
