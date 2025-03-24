import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link href="/dashboard">
        <span className="text-blue-500 hover:underline">Go back to Home</span>
      </Link>
    </div>
  )
}

export default Page
