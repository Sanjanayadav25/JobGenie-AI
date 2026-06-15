import {router} from './app.routes.jsx'
import {RouterProvider} from 'react-router'
import {AuthProvider} from './features/auth/auth.provider.jsx'
import { InterviewProvider } from "./features/interview/interview.provider.jsx"


function App() {
  

  return (
    <>
      <AuthProvider>
        <InterviewProvider>
      <RouterProvider router={router} />
      </InterviewProvider>
      </AuthProvider>
    </>
  )
}

export default App
