import './App.css'
import ItemListContainer from './components/Contenedor/ItemListContainer'
import Navbar from './components/Narbar'

function App() {
  

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos!" />
    </div>
  )
}

export default App
