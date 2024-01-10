import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import {motion} from 'framer-motion'
import React from 'react'

const Loading = () => {
    return (
        <MaxWidthWrapper>
        <div className='min-h-screen flex flex-col bg-white border shadow-sm rounded-full animate-spin dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]' >
         <div className='flex flex-auto flex-col justify-center items-center p-4 md:p-5'>
                <div className="flex justify-center">
                    <div className=' inline-block w-6 h-6 border-[30px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500' role='status'>
                       Loading....
                    </div>
            </div>
         </div>
        </div>
        </MaxWidthWrapper>
            
    );
}

export default Loading;