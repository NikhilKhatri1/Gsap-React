import React from 'react'
import StarSVG from './components/StarSVG.jsx'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import youtube from './assets/youtube-icon1.gif'
const App = () => {
  useGSAP(()=>{
    gsap.utils.toArray(".cir").forEach((cir,index)=>{
      gsap.fromTo(
        cir,
        {
          y:500,
        },
        {
          y:-400,
          duration:3+index,
          repeat:-1,
        }
      )
    })
  })
  return (
    
    <div className='flex flex-col items-center justify-center h-screen p-20 bg-black'>
      <div className="w-96 bg">
        <StarSVG />
      </div>
      <div className="p-6 border rounded-lg shadow-[#5833a6]/20 shadow-2xl w-96 bg-neutral-950 border-white/10">
        <div className="space-y-4 text-white/90">
          <div className="w-10 h-10">
            <img src={youtube} alt="" />
          </div>
          <h1 className="text-2xl font-bold tracking-widest uppercase bg-gradient-to-tr from-[#5833a6] to-white bg-clip-text text-transparent leading-none">nullx</h1>
          <p className="text-sm leading-6">
            Modern UI design practices and responsive front-end development content
          </p>
          <div className="flex gap-4 text-[12px] tracking-normal justify-center items-center">
            <p className="p-2 border rounded-full border-1 border-gray-500/20 ring-inset ring-1 ring-gray-800/10 hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-950">Web Development</p>
            <p className="p-2 border rounded-full border-1 border-gray-500/20 ring-inset ring-1 ring-gray-800/10 hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-950">Programming</p>
            <p className="p-2 border rounded-full border-1 border-gray-500/20 ring-inset ring-1 ring-gray-800/10 hover:bg-gradient-to-tr hover:from-gray-900 hover:to-gray-950">Tech Tutorials</p>
          </div>
        </div>
        <div className="mt-2">
          <button className="w-full py-2 tracking-wide text-white rounded-full bg-gradient-to-b  to-[#5866a3]/30 from-[#5866f3] hover:bg-gradient-to-t hover:to-[#282e70] hover:from-[#4959a8] transition-all duration-500">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App