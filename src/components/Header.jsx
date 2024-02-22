import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="fixed w-full h-16 bg-white shadow">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <Link to='/' className='font-bold text-gray-600 text-2xl'>Logo</Link>
        <Nav />
      </div>
    </header>
  )
}