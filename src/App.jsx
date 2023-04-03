import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import ActiveLink from './components/ActiveLink/ActiveLink'

function App() {
  const [count, setCount] = useState(0)
  const navigation = useNavigation()


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <div className='nav-bar'> 
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/posts">Posts</ActiveLink>
        <ActiveLink to="/friends">Friends</ActiveLink>

      </div>
      <div>
        {navigation.state === 'loading' ? 'Loading .....' : ''}
      </div>

      <Outlet></Outlet>
    </div>
  )
}

export default App
