import { BrowserRouter } from 'react-router-dom'
import Router from '../services/Router'
import Layout from './Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}