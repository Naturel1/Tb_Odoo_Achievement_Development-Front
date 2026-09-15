import './App.css'
import AppRoutes from './AppRoutes'
import Navbar from './shared/components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <AppRoutes/>
      </main>
    </>
  )
}

export default App
