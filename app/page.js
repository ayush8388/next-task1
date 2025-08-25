import Link from 'next/link'
import React from 'react'
import posts from '../data/posts.json'

const page = () => {
  return (
    <div className='container p-12 mx-auto'>
      <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">BLOGS</h1>
      <div className='flex flex-col items-center justify-center px-4'>
        <ul className="w-full max-w-2xl space-y-6 ">
        {
          posts.map((post) => (
            <li key={post.id} >
              <Link href={`/blog/${post.id}`} className="block bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition-colors border border-gray-200">{post.title}</Link>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default page
