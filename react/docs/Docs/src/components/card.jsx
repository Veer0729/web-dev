import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, scale } from "motion/react"



function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
    <FaRegFileAlt/>
    <p className='text-sm leading-right mt-5 font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-1 px-4'>
            <h5>{data.filesize}</h5>
            <span className=''><MdOutlineFileDownload/></span>
        </div>
        <div className='tag w-full py-2 bg-amber-300 flex items-center justify-center'>
            <p className='text-l  '>File Name</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Card