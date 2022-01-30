import {Home,Form,Countries} from "./components"
import {Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar';


const App = () => {

   return(
     <div>
        <Navbar/>

          <Switch>
            <Route exact path ="/" component={Home}  />
            <Route exact path ="/contact" component={Form}  />
            <Route exact path ="/countries" component={Countries}  />
          </Switch>
        

     </div>
   )
 }

 export default App;