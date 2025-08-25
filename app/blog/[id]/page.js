'use client'
import React from 'react'
import posts from '../../../data/posts.json'
import { useParams } from 'next/navigation';


const page = () => {
    const params = useParams();
    const post = posts.find((p) => String(p.id) === params.id);
  if (!post) {
    return <div>no Post found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mt-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">{post.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">{post.content}</p>
      </div>
    </div>
  )
}

export default page
