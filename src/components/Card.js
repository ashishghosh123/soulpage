import React from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {repo_name} from './../action'
import {Link} from 'react-router-dom'

function Card() {
    const name = useSelector(state=>state.name)
    const img = useSelector(state=>state.img_url)
    const followers = useSelector(state=>state.followers)
    const following = useSelector(state=>state.following)
    const created = useSelector(state=>state.created)
    const repos = useSelector(state=>state.repos)
    const log_name = useSelector(state=>state.log_name)
    
    const dispatch = useDispatch()
    return (
        <React.Fragment>       
        <div className="card text-center">
        <div className="card-header">
          <h3>Profile Information</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Login Name - {log_name}</h6>
          <img src={img} alt='ashish' height="120px" style={{borderRadius:"50%"}}/>
          <p className="card-text ">Followers: {followers} , Following: {following}</p>
          <p className="card-text font-weight-bold">No. of Repository found - {repos}</p>
        
            <Link to="/repository" className="btn btn-primary" onClick={()=>dispatch(repo_name(log_name,repos))}>Go to Repository</Link>           
        </div>
        <div className="card-footer text-muted font-weight-bold">
          Created At : {created} 
        </div>
      </div>
        </React.Fragment>
    )
}

export default Card
