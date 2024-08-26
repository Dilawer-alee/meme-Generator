"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Detail({ item }) {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [generatedMemeUrl, setGeneratedMemeUrl] = useState('');
  
  const userName = 'Dilawerbalti';
  const pass = 'dilawer007';

  const submitMeme = async () => {
   
    const memeUrl = `https://api.imgflip.com/caption_image?template_id=${item.id}&username=${userName}&password=${pass}&text0=${encodeURIComponent(text)}&text1=${encodeURIComponent(text1)}`;
    
    try {
     
    //   const { data } = await axios.get(memeUrl);
    const response = await axios.get(memeUrl);
    const data = response.data;

      if (data.success) {
        setGeneratedMemeUrl(data.data.url);
        setText('');
        setText1('');
      } else {
        console.error('Error:', data.error_message);
      }
    } catch (error) {
      console.error('Request error:', error.message);
    }
  };

  return (
    <div className='bg-grey-500 min-h-screen flex flex-col items-center justify-center'>
      
      <>
        <h1 className='ml-78 text-4xl'>Meme Generator</h1>
        <div className="relative ml-78">
          <div className="relative">
            <img
              src={generatedMemeUrl || item.url}
              alt={item.name}
              className='w-[300px] h-[250px]'
            />
          </div>
          <div>
            <input 
              type='text' 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              placeholder='Input 1' 
              className='border p-2 rounded mt-6 w-[300px] text-black'
            /><br/><br/>
            <input 
              type='text' 
              value={text1} 
              onChange={(e) => setText1(e.target.value)} 
              placeholder='Input 2' 
              className='border p-2 rounded mr-2 w-[300px] text-black'
            /><br/><br/>
            <button 
              onClick={submitMeme} 
              className='p-2 bg-green-500 hover:bg-green-800 text-black rounded ml-20 w-40'
            >
              Generate
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
