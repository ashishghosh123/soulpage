import React from 'react'
import {useSelector} from 'react-redux' 
import {Link, useHistory} from 'react-router-dom'

function Contribution() {
    const contrs = useSelector(state=>state.contributors)

    const history = useHistory();

    const home = {
        color:"white"
    }  
    const img_h = {
        height:"260px",
        width:"250px"
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
           <br/><br/>
           <div class='container'>
           <div class='row'>
                <div class="col-sm-2">
                    <button onClick={()=>history.push('/repository')} className="btn btn-outline-info btn-sm">  Back to Repository </button>
                </div>
                <div class="col-sm-2">
                    <button onClick={()=>history.push('/')} className="btn btn-outline-success btn-sm">  Back to Home </button>
                </div>
            </div>
            <br/>
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-3">
                    {
                        contrs.map(cont=><img src={cont[0].avatar_url} className="card-img" style={img_h}/>)
                    }
                    
                    </div>
                    <div class="col-md-9">
                    <div class="card-body">
                        {
                            contrs.map(cont=><h5 className="card-body"> {cont[0].login} ({cont[0].id} )</h5>)
                        }

                        <p class="card-text">Node Id - {
                            contrs.map(cont=><small className="text-muted"> {cont[0].node_id}</small>)
                        }</p>

                        <p class="card-text">Contributions - {
                            contrs.map(cont=><small className="text-muted font-weight-bold"> {cont[0].contributions}</small>)
                        }</p>
                        
                        
                        {
                            contrs.map(cont=><a className="btn btn-outline-danger btn-sm" href={cont[0].html_url} target="_blank"> Click to go github page of {cont[0].login}</a>)
                        }

                       
                        <p>
                        
                        </p>
                        <p class="card-text"><small class="text-muted">Designed & Developed By Ashish Ghosh | All Right Reserved @2020</small></p>
                    </div>
                    </div>
                </div>
            </div>         
           
            </div>
        </div>
    )
}

export default Contribution
