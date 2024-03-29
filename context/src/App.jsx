

import UserContextProvider from './Context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
function App() {


  return (
    <UserContextProvider>
   <h1>React -Context -API</h1>
   <Login/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
