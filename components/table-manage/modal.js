import { useEffect, useState } from 'react'

export default function Modalbox({title,message}) {
    
  const [open, setOpen] = useState(false)

 function close(){
    setOpen(true)
    console.log("hhhhhhh")
  }

return (
<>
{/* <div className="flex justify-center mt-32 ">    */}
<div  className="flex items-center justify-center min-h-screen">   
{/* <div hidden={state}  className="p-4 drop-shadow rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 dark:bg-blue-200" role="alert"> */}
<div  className="m-8  max-w-lg p-4 drop-shadow-lg rounded-lg bg-white" role="alert"> 
  <div className="flex items-center">
    <svg className="mr-2 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path></svg>
    <h3 className="text-lg font-medium text-black">{title}</h3>
  </div>
  <div className="mt-4 mb-4 text-sm text-black ">
  {message}
  </div>
  <div className="flex justify-end">
    {/* <button type="button" className="text-white bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      OK
    </button> */}
    <button type="button" onClick={ close } className="text-red-600 bg-transparent hover:bg-red-600 hover:text-white font-medium rounded-lg text-md py-2 px-4 text-center " data-dismiss-target="#alert-additional-content-1" aria-label="Close">
      Close
    </button>
  </div>
</div>
</div> 
 </>
    )
  }

