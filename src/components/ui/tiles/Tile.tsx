import React from 'react'

type Props = {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Tile = ({className, isActive = false, onClick, children}: Props) => {

  return (
    <li onClick={onClick} className={`flex cursor-pointer rounded-main duration-200 ${isActive ? "bg-primary" : "lg:hover:bg-gray-100"} ${className}`}>
      {children}
    </li>
  )
}

export default Tile