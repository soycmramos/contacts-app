import { Routes, Route } from 'react-router-dom'

// Pages
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}