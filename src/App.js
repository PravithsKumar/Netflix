import Home from './Home'
import Login from './Login'
import SignIn from './SignIn';
import Password from './Password';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App()
{

return(
  <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signUp' element={<Login/>}/>
      <Route path='/password' element={<Password/>}/> 
    </Routes>
  </Router>
)
}


export default App