'use client';
import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGoogleLogin } from '@react-oauth/google';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);  

  const userProfile = false;

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  const normalLink =
    'flex items-center gap-3 hover:bg-primary p-3 justify-center md:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

  return (
    <div>
      <div
        className='m-2 ml-4 mt-3 block text-xl md:hidden cursor-pointer'
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <AiOutlineMenu /> : <ImCancelCircle />}
      </div>
      {showSidebar && (
        <div className='mb-10 flex w-20 flex-col justify-start border-r-2 border-gray-100 p-3 md:w-400 md:border-0'>
          <div className='border-gray-200 md:border-b-2 md:pb-4'>
            <Link href='/'>
              <div className={normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='hidden text-xl md:block'>For You</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className='hidden px-2 py-4 md:block'>
              <p className='text-gray-400'>
                Log in to like and comment on videos
              </p>
              <div className='pr-4'>
                <button
                      className='bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997] cursor-pointer'
                      onClick={() => login()}
                    >
                      Log in
                    </button>
                
              </div>
            </div>
          )}
        </div>
      )}
      <Discover />
      <SuggestedAccounts />
      <Footer />
    </div>
  );
};

export default Sidebar;
