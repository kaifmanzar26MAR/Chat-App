import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1">
        <div className="avatar offline">
          <div className="w-12 rounded-full">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg" />
          </div>
        </div>
        
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">😁</span>
          </div>
        </div>
        
      </div>
      <div className='divider my-0 py-0 h-1' />

    </>
  );
};

export default Conversation;
