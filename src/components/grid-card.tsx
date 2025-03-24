import React from 'react'

type GridCardProps = {
  children: React.ReactNode
  className?: string
}

const GridCard = ({children, className}: GridCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-2xl duration-300 h-full ${className}`}>
      {children}
    </div>
  )
}

export default GridCard
