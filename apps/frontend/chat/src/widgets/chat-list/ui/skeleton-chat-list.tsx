export const SkeletonChatList = () => (
  <div className="chat:max-w-[320px] chat:w-full chat:bg-dark
    chat:dark:bg-black chat:h-screen
    chat:rounded-br-[5px] chat:rounded-t-[0px]
    chat:flex chat:flex-col
    chat:px-3 chat:py-[20px] chat:gap-6"
  >
    <div className="chat:w-full chat:h-7 chat:bg-brown/80 chat:animate-pulse chat:rounded-2xl"/>

    <div className="chat:flex chat:flex-col chat:gap-3">
      <h1 className="chat:text-2xl chat:text-white/80">Chats</h1>
      <div className="chat:flex chat:items-center
        chat:justify-around chat:gap-5
        chat:bg-black chat:rounded-2xl
        chat:px-2 chat:py-1 chat:w-full
        chat:dark:bg-dark chat:animate-pulse"
      >
        <div className="chat:rounded-2xl chat:grow chat:basis-0 chat:h-9
        chat:p-2 chat:overflow-hidden chat:bg-brown chat:animate-pulse"/>

        <div className="chat:rounded-2xl chat:grow chat:basis-0 chat:h-9
        chat:p-2 chat:overflow-hidden chat:bg-brown chat:animate-pulse"/>

        <div className="chat:rounded-2xl chat:grow chat:basis-0 chat:h-9
        chat:p-2 chat:overflow-hidden chat:bg-brown chat:animate-pulse"/>
      </div>
    </div>

    <div className="chat:flex chat:flex-col chat:gap-3">
      <div className="chat:w-full chat:h-18 chat:bg-darksLateGray chat:animate-pulse chat:rounded-lg"/>
      <div className="chat:w-full chat:h-18 chat:bg-darksLateGray chat:animate-pulse chat:rounded-lg"/>
      <div className="chat:w-full chat:h-18 chat:bg-darksLateGray chat:animate-pulse chat:rounded-lg"/>
    </div>
  </div>
);
