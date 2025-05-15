import React, { useContext } from 'react';
import { ReplyContext } from '../context/Reply';

const Chats = () => {
  const { Data, Response } = useContext(ReplyContext);

  // Combine and sort messages chronologically
  const allMessages = [
    ...Data.map((text, index) => ({ type: 'user', text, index })),
    ...Response.map((text, index) => ({ type: 'ai', text, index }))
  ].sort((a, b) => a.index - b.index);

  return (
    <div className="w-full h-[90%] bg-gray-900 text-white flex flex-col overflow-y-auto p-4 space-y-4">
      {allMessages.map((message, index) => (
        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-[70%] p-3 shadow-lg ${
            message.type === 'user' 
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl rounded-tr-none shadow-violet-500/20'
              : 'bg-slate-800 rounded-2xl rounded-tl-none border border-slate-700'
          }`}>
            <p className="text-white text-sm">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
