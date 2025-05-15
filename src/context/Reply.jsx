import React, { createContext, useEffect, useState } from 'react'

export let ReplyContext = createContext()
const Reply = ({children}) => {

    const [Data, setData] = useState([]);
    const [Response, setResponse] = useState([]);
  return (
    <ReplyContext.Provider value={ {Data , setData  , Response , setResponse}}>
        {children}
    </ReplyContext.Provider>
  )
}

export default Reply
