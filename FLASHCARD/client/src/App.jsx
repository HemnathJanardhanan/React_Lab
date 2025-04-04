import {Route,Routes} from 'react-router-dom';

import HomePage from "./pages/HomePage"
import NavBar from './components/custom/NavBar';
import CreateDeck from "./pages/CreateDeck"
import ViewDeck from './pages/ViewDeck';
import Play from './pages/Play';
function App() {
  

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/CreateDeck' element={<CreateDeck/>}/>
        <Route path='/deck/:DeckId' element={<ViewDeck/>}/>
        <Route path='/Play/:DeckId' element={<Play/>}/>
      </Routes>
    </div>
  )
}

export default App
