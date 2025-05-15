// import React, { useContext } from 'react';
// import { ReplyContext } from '../context/Reply';

// const Chats = () => {
//   const { Data, Response } = useContext(ReplyContext);

//   return (
//     <div className="w-full h-[90%] bg-gray-900 text-white flex flex-col overflow-y-auto p-4 space-y-4">
//       {/* User Messages */}
//       {Data?.map((item, index) => (
//         <div key={index} className="flex justify-end">
//           <div className="max-w-[70%] bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl rounded-tr-none p-3 shadow-lg shadow-violet-500/20">
//             <p className="text-white text-sm">{item}</p>
//           </div>
//         </div>
//       ))}

//       {/* AI Responses */}
//       {Response?.map((item, index) => (
//         <div key={index} className="flex justify-start">
//           <div className="max-w-[70%] bg-slate-800 rounded-2xl rounded-tl-none p-3 shadow-lg border border-slate-700">
//             <p className="text-slate-100 text-sm">{item}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chats;
