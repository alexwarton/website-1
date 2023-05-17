import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";

export default function AblyChatComponent (){

  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const [channel, ably] = useChannel("chat-1", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText) => {
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");
    inputBox.focus();
  }

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  }

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    if(author === "me"){
        return  <span key={index} className='bg-blue-500 float-left p-2 rounded-xl m-3 text-white'>{message.data}</span>;

    // }else{
    //     return <div ><span className='mt-3 float-right text-xs text-white'>other</span> <span key={index} className='bg-green-500 float-right p-2 rounded-xl m-3 text-white'>{message.data}</span></div>;
    // }
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className="m-5 bg-black border-[1px] border-gray-500 ">
      <div className="h-96 overflow-y-scroll flex flex-col w-80">
        {messages}
        <div ref={(element) => { messageEnd = element; }}></div>
      </div>
      <form onSubmit={handleFormSubmission} >
        <input
          ref={(element) => { inputBox = element; }}
          value={messageText}
          placeholder="Type a message..."
          onChange={e => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-3/4 bg-black text-white border-white border-[1px] p-2"
        ></input>
        <button type="submit" className="w-1/4 border-white bg-black text-white border-[1px] text-center border-gray-300 p-2" disabled={messageTextIsEmpty}>Send</button>
      </form>
    </div>
  )
}

// export default AblyChatComponent;