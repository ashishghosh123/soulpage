import React , {useState}from 'react'
import Card from './Card'
import {useDispatch} from 'react-redux' 
import {chng_name} from './../action'
import {Link} from 'react-router-dom'

function Main() {
    const [name,setName] = useState('');
    const [inp, setInp] = useState('');
    
    const dispatch = useDispatch(chng_name)
    const sub = {
        color:"white",
        border:"1px solid white"
    }
    const home = {
        color:"white"
    }    
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        setInp(name)
    }

   const inputEvent = (e) =>{
        setName(e.target.value)
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link className="navbar-brand" to="/" style={home}>SoulPage Task</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={home}>Home <span className="sr-only">(current)</span></a>
            </li>                
           
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" type="search" placeholder="Enter Github Name" aria-label="Search" name='name' value={name} onChange={inputEvent}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>dispatch(chng_name(name))} style={sub}>Search</button>
          </form>
          
        </div>
      </nav>
      <Card />
        </div>
    )
}

export default Main
