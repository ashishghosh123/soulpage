import Main from './components/Main'
import {Route,Switch,Redirect} from 'react-router-dom'
import Repository from './components/Repository'
import Contribution from './components/Contribution';

const App = () =>{  

  return (
    <div className="App">
    <Switch>      
      <Route path='/repository' exact component={Repository}/>
      <Route path='/' exact component={Main}/> 
      <Route path='/contribution' exact component={Contribution}/> 
      <Redirect to='/' />     
    </Switch>          
    </div>
  );
}

export default App;
