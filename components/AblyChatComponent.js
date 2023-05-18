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
        return  <div  key={index + "me" + "div"}> <span className='text-white float-left text-xs' key={index + "me" + "label"}> Me </span> <span key={index + "me"} className='bg-blue-500  my-message'>{message.data}</span> </div>;

    }else {
        return  <div  key={index + "other" + "div"}> <span className='text-white float-right text-xs' key={index + "other" + "label"}> Other </span> <span key={index + "other"} className='bg-green-500 float-right p-2 rounded-xl m-3 text-white'>{message.data}</span> </div>;
    }
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className="chat-box">
      <div className="messages overflow-y-scroll">
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