import { Switch, Route, Link } from "react-router-dom";
import Accountcopy from "./Components/Accountcopy";
import Account from "./Components/Account";
import Login from "./Components/Login";
import Page1 from "./Components/Page1";
import Navbar from "./Components/Navbar";



function App() {
  return (
<>    


<Switch >
    
<Route exact path="/" ><Login/></Route>

    <Route  path="/navbar" ><Navbar/></Route>
      
    </Switch>


  
  
  </>

  )
  
}
export default App