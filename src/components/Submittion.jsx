import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ReplyContext } from '../context/Reply';

const Submittion = () => {
  const { Data, setData } = useContext(ReplyContext);
  const { register, handleSubmit, reset } = useForm();

  const submitted = (formData) => {
    setData(prevPrompt => [...prevPrompt, formData.prompt]);
    reset()
  };

  useEffect(() => {
    // console.log(Data);
  }, [Data]);

  return (
    <div className="w-full">
      <form className="flex items-center gap-2" onSubmit={handleSubmit(submitted)}>
        <div className="flex-1">
          <input
            type="text"
            className="w-full h-[45px] bg-slate-800 border border-slate-700 rounded-xl px-4 text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            placeholder="Type your message here..."
            {...register("prompt")}
          />
        </div>
        <button 
          type="submit" 
          className="h-[45px] w-[45px] flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200 shadow-lg hover:shadow-violet-500/20"
        >
          <i className="ri-arrow-up-circle-fill text-2xl text-white"></i>
        </button>
      </form>
    </div>
  );
};

export default Submittion;
