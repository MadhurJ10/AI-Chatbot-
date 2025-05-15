import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { ReplyContext } from './Reply';

const Api = () => {
  const { Data, setResponse } = useContext(ReplyContext);

  // console.log(Data)

  useEffect(() => {
    const generateContent = async () => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmx5QjMWyWoBBpS7dDXzqV8n8s1kwpqi0`;

      const headers = {
        'Content-Type': 'application/json',
      };

      const data = {
        contents: [
          {
            parts: [{ text: Data[Data.length - 1] }],
          },
        ],
      };

      try {
        const response = await axios.post(url, data, { headers });
        const content = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log('Response:', content);
        // Update the context with the response by appending to existing responses
        setResponse(prevResponses => [...prevResponses, content]);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    };

    if (Data) {
      generateContent();
    }
  }, [Data, setResponse]); // Run only when Data changes

  return (
    <div>
      {/* <h1>API Call Component</h1> */}
    </div>
  );
};

export default Api;
