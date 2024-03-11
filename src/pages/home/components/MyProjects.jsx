import React from 'react';
import CryptoBg from '../../../assets/images/Captured’écran2024-03-10165401.png'
import SocialNetBg from '../../../assets/images/socialNet.png'
import { ReactTyped } from 'react-typed';


export const MyProjects = () => {
    return (



        <>
            <div className='h-fit w-[100%] text-4xl font-bold py-8 px-10 flex flex-col items-center'>
                <h1 className='underline text-4xl font-extrabold p-4 text-center'>My Projects</h1>
                <div className='flex flex-wrap w-[84%] h-fit gap-2 my-5 justify-center'>
                    <div className='w-[49%] h-[55vh] text-center my-3  '>
                        <div className='mb-4 text-blue-400'>
                            <h1>
                                {" "}
                                <ReactTyped strings={["CryptoNet"]} typeSpeed={100} loop />
                            </h1>
                        </div>
                        <div className="w-[100%] h-[90%]  flex justify-center items-center hover:text-gray-200 " style={{ backgroundImage: `url(${CryptoBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        </div>
                    </div>
                    <div className='w-[49%] h-[55vh] text-center my-3  '>
                        <div className='mb-4 text-blue-400'>
                            <h1>
                                {" "}
                                <ReactTyped strings={["SocialNet"]} typeSpeed={100} loop />
                            </h1>
                        </div>
                        <div className="w-[100%] h-[90%]  flex justify-center items-center hover:text-gray-200 " style={{ backgroundImage: `url(${SocialNetBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};
