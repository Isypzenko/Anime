import Header from '../Header'
import {Routes, Route} from 'react-router-dom'


const App = () => {


  return (

    <Routes >
      <Route path='' element={<Header/>}></Route>
    </Routes>

  )
}


export default App;