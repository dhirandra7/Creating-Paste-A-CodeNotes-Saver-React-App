import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes } from '../Redux/PasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

 function createPaste(){
   const paste = {
     title: title,
     value: value,
     _id: pasteId || Date.now().toString(36),
     createAt: new Date().toISOString(),
    }
    if(pasteId){
      //update
      
      dispatch(updateToPastes(paste));
    }
    else{
       dispatch(addToPastes(paste));
      //create
     }
     // after creation and updation
     setTitle('');
     setValue('');
     setSearchParams({});
 }

  return (
    <>
    <div className="flex flex-col gap-7 place-content-between">
      <div className='flex gap-3'>

      <input
      className="p-1 bg-black rounded-2xl mt-2 w-[66%] pl-4"
      type="test"
      placeholder='enter title here'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      
      />
    <button 
    onClick={createPaste}
    className="p-2 rounded-2xl mt-2">
      {
        pasteId ? "Update my paste" 
        : "Create my paste"
      }
    </button>
      </div>
    <div className="mt-8">
      <textarea
      className="rounded-2xl bg-black mt-4, min-w-[500px] p-4"
       
      placeholder="enter content here"
      onClickChange={(e) => setValue(e.target.value)}
      rows={20}
      >{value}</textarea>
    </div>
    </div>
    </>
  )
}

export default Home
