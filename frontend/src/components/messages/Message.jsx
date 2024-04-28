import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src="https://media.istockphoto.com/id/543560762/photo/close-up-surprised-pure-white-exotic-cat-head-isolated-black-background.jpg?s=612x612&w=0&k=20&c=g-B-MufwchsqU_YskUNln7Ol37VH_470gFtWHlV7a4g=" alt="" />

        </div>

      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>hi! Whats Up. My D?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:10</div>

    </div>
  )
}

export default Message;