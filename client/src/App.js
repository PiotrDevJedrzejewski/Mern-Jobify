import { Landing, Error, Register, ProtectedRoute } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllJobs />} />
          <Route path='profile' element={<Profile />} />
          <Route path='stats' element={<Stats />} />
          <Route path='add-job' element={<AddJob />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
