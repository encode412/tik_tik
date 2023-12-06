import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover = () => {
//   const router = useRouter();

const activeTopicStyle = "md:border-2 hover:bg-primary md:border-gray-300 px-3 py-2 rounded md:rounded-full cursor-pointer text-black"

const topicStyle = "md:border-2 hover:bg-primary md:border-gray-300 px-3 py-2 rounded md:rounded-full cursor-pointer text-black"

  return (
    <div className='pb-6 md:border-gray-200 xl:border-b-2'>
      <p className='m-3 mt-4 hidden font-semibold text-gray-500 md:block'>
        Popular Topics
      </p>
      <div className='flex flex-wrap gap-3'>
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topicStyle}>
              <span className='font-bold text-2xl md:text-md'>{item.icon}</span>
              <span className='font-medium text-md hidden md:block capitalize'>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
