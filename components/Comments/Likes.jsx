import React, { useState, useRef } from 'react';
import { toggleItem } from '@/lib/function';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Likes = ({ post }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const likeRef = useRef(false);
  const router = useRouter();

  const reset = () => {
    router.replace(router.asPath, undefined, { scroll: false });
    setIsButtonDisabled(false);
  };

  const initialAction = () => {
    likeRef.current = !likeRef.current;
  };

  const session = useSession();
  const userId = session.data?.user.name;

  let data = { postId: post.id };
  let url = '/api/CUD/Hearts';

  return (
    <div>
      <button
        disabled={isButtonDisabled}
        ref={likeRef}
        className={` ${
          likeRef.current || post.hearts.some((heart) => heart.user.name === userId)
            ? 'bg-red-400 hover:bg-red-300'
            : 'bg-green-500  hover:bg-green-300'
        } rounded-sm border-b-2  duration-500  px-1`}
        onClick={() => {
          toggleItem(url, data, reset, setIsButtonDisabled, initialAction);
        }}
      >
        Like
      </button>
    </div>
  );
};

export default Likes;
