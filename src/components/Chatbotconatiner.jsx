import React from 'react'
import Chats from './Chats'
import Submittion from './Submittion'
import Api from '../context/Api'

const Chatbotconatiner = () => {
  return (
    <div className='main fixed inset-0 w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
      {/* Chat Container */}
      <div className='w-[500px] h-[580px] bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-700/50'>
        {/* Header */}
        <div className='bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4'>
          <h1 className='text-xl font-bold text-white'>AI Assistant</h1>
          <p className='text-sm text-violet-100'>Your intelligent conversation partner</p>
        </div>

        {/* Chat Area */}
        <div className='flex-1 overflow-hidden'>
          <Chats/>
        </div>

        {/* Divider */}
        <div className='h-[1px] bg-slate-700'></div>

        {/* Input Area */}
        <div className='p-4 bg-slate-900/80'>
          <Submittion/>
        </div>

        {/* API Context */}
        <Api/>
      </div>
    </div>
  )
}

export default Chatbotconatiner
