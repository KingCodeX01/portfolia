import React from 'react'

const Header = () => {
    return (
        <>
            {/* <div className='w-full h-10 bg-black flex px-20 py-8'>
                <div className='w-full flex justify-between items-center max-w-screen-2xl mx-auto'>
                    <div className='text-white'>
                        <h1 className='text-3xl flex items-center justify-center gap-1'><span className='font-bold text-amber-400'>{'<'}</span>Paribesh<span className='font-bold text-amber-400'>{'/>'}</span></h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-4 text-white text-lg font-semibold cursor-pointer'>
                            <li className='hover:text-amber-400'>About</li>
                            <li className='hover:text-amber-400'>Projects</li>
                            <li className='hover:text-amber-400'>Skills</li>
                            <li className='hover:text-amber-400'>Experience</li>
                            <li className='hover:text-amber-400'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className="w-full h-auto fixed bottom-8 flex items-center justify-center z-50">
                <div className="max-w-screen-2xl mx-auto flex items-center justify-around px-4 py-2 
      w-4/6 rounded-full border border-gray-300 bg-white/50 backdrop-blur-md 
      shadow-md">
                    <div className="flex items-center gap-2">
                        <h1 className="hidden md:block font-semibold">Home</h1>
                        <div className='md:hidden'>
                            <i className="fa-solid fa-house"></i>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="hidden md:block font-semibold">About</h1>
                        <div className='md:hidden'>
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="hidden md:block font-semibold">Projects</h1>
                        <div className='md:hidden'>
                            <i className="fa-solid fa-diagram-project"></i>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="hidden md:block font-semibold">Skills</h1>
                        <div className='md:hidden'>
                            <i className="fas fa-screwdriver-wrench"></i>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="hidden md:block font-semibold">Experience</h1>
                        <div className='md:hidden'>
                            <i className="fas fa-briefcase"></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header