import Home from './Home'
import Login from './Login'
import SignIn from './SignIn';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App()
{

return(
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
    </Routes>
  </Router>
)
}


export default App