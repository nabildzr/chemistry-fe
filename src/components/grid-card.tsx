import React from 'react'

type GridCardProps = {
  children: React.ReactNode
  padding?: string
  className?: string
  isFull?: boolean
}

const GridCard = ({children, className, padding = "p-6", isFull = false}: GridCardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-2xl duration-300 ${isFull ? 'h-full' : ''} ${className} ${padding}`}>
      {children}
    </div>
  )
}

export default GridCard
