import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Create from './routes/Create'
import Sidebar from './components/Sidebar'
import Gallery from './routes/Gallery'
import Edit from './routes/Edit'
import DetailsPage from './routes/DetailsPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
