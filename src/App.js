import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import RobotInfo from './RobotInfo'


function App() {          
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/RobotInfo" element={<RobotInfo />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
