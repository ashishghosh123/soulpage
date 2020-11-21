import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux' 
import {chng_name, contribute} from './../action'

function Repository() {
    const history = useHistory();
    const repository = useSelector(state=>state.reposit)
    const log_name = useSelector(state=>state.log_name)
    const repos = useSelector(state=>state.repos)

    const dispatch = useDispatch(chng_name)

    const [name,setName] = useState('');
    const [inp, setInp] = useState('');
    
  
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
               
             </div>
           </nav>
           <br/><br/><br/>
           <div class="container">
                <div class="row">
                  <div class="col-6">
                     <button onClick={()=>history.push('/')} className="btn btn-outline-info btn-lg">  Back to Home </button>
                  </div>
                <div class="col-6">
                   {/*} <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                       <input className="form-control mr-sm-2" type="search" placeholder="Add Repository" name='name'  value={name} onChange={inputEvent} />
                       <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={()=>dispatch(add_repo(name,log_name))} >Add Repsitory</button>
                     </form> */}
                </div>
              </div>    

               <br/><br/>
                <div className="list-group">
                <h4>No. of Repository {repos} <small>(Click repository link for Contributors )</small> </h4> 
                {
                    repository.map((repos,i)=><Link to="/contribution" key={i} type="button" className="list-group-item list-group-item-action" onClick={()=>dispatch(contribute(repos.name,log_name))}>{repos.name} </Link>)
                }
               
            </div>
          </div>
        </div>   
    )
}

export default Repository
