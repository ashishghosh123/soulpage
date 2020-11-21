
export const chng_name = (inp) =>{
    return async(dispatch) =>{
        const data= await fetch(`https://api.github.com/users/${inp}`)        
        const res = await data.json()   
        //console.log(res)   
           dispatch({
            type:'CHNG_NAME',
            payload:res
           })      
    }
}
export const repo_name = (name) =>{
    return async(dispatch) =>{
        const data= await fetch(`https://api.github.com/users/${name}/repos`)        
        const res = await data.json()   
        // console.log(res)   
           dispatch({
            type:'REPO',
            payload:res
           })      
    }
}

export const add_repo = (name,log_name) =>{
    return async(dispatch) =>{
        const data= await fetch(`https://api.github.com/users/${log_name}/repos`)        
        const res = await data.json()   
        // console.log(name)   
        // console.log(log_name)  
           dispatch({
            type:'ADD_REPO',
            payload:res
           })      
    }
}
export const contribute = (repo_cont,log_name) =>{
    return async(dispatch) =>{
         const data= await fetch(`https://api.github.com/repos/${log_name}/${repo_cont}/contributors `)          
         const res = await data.json()   
        console.log(repo_cont) 
        console.log(log_name)  
        // console.log(res)     
           dispatch({
            type:'CONTRIBUTE',
            payload:res
           })      
    }
}
