import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-300 rounded lg:hidden"
      >
        <FaBars className="w-8 h-8 text-gray-500" />
      </button>
      <ul className={`flex flex-col gap-4 bg-white absolute top-16 right-0 w-4/5 sm:w-2/3 md:w-1/2 h-screen p-4 border lg:flex-row lg:static lg:w-auto lg:h-auto lg:p-0 lg:border-none lg:-translate-x-0 lg:flex gap-x-4${!showMenu && ' hidden'}`}>
        <li><Link to='/signin' className='button button-success block w-full lg:w-auto'>Sign In</Link></li>
        <li><Link to='/signup' className='button button-success-outline block w-full lg:w-auto'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}