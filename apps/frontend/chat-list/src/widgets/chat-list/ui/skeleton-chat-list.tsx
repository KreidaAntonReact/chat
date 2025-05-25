export const SkeletonChatList = () => (
  <div className="list:max-w-[320px] list:w-full list:bg-dark
    list:dark:bg-black list:h-screen
    list:rounded-br-[5px] list:rounded-t-[0px]
    list:flex list:flex-col
    list:px-3 list:py-[20px] list:gap-6"
  >
    <div className="list:w-full list:h-7 list:bg-brown/80 list:animate-pulse list:rounded-2xl"/>

    <div className="list:flex list:flex-col list:gap-3">
      <h1 className="list:text-2xl list:text-white/80">Chats</h1>
      <div className="list:flex list:items-center
        list:justify-around list:gap-5
        list:bg-black list:rounded-2xl
        list:px-2 list:py-1 list:w-full
        list:dark:bg-dark list:animate-pulse"
      >
        <div className="list:rounded-2xl list:grow list:basis-0 list:h-9
        list:p-2 list:overflow-hidden list:bg-brown list:animate-pulse"/>

        <div className="list:rounded-2xl list:grow list:basis-0 list:h-9
        list:p-2 list:overflow-hidden list:bg-brown list:animate-pulse"/>

        <div className="list:rounded-2xl list:grow list:basis-0 list:h-9
        list:p-2 list:overflow-hidden list:bg-brown list:animate-pulse"/>
      </div>
    </div>

    <div className="list:flex list:flex-col list:gap-3">
      <div className="list:w-full list:h-18 list:bg-darksLateGray list:animate-pulse list:rounded-lg"/>
      <div className="list:w-full list:h-18 list:bg-darksLateGray list:animate-pulse list:rounded-lg"/>
      <div className="list:w-full list:h-18 list:bg-darksLateGray list:animate-pulse list:rounded-lg"/>
    </div>
  </div>
);
