const iState = {
    name:'github',
    log_name:'github',
    reposit:[],
    username:'',
    following:0,
    followers:0,
    message:'',
    nodata:false,
    img_url:'https://avatars1.githubusercontent.com/u/9919?v=4',
    created:'2008-05-11T04:37:31Z',
    repos:366,
    contributors:[]
}
 const counterReducer = (state=iState,action) =>{
    switch(action.type){
        case 'CHNG_NAME':
            return {
                ...state,
                name:action.payload.name,
                log_name:action.payload.login,
                img_url:action.payload.avatar_url,
                followers:action.payload.followers,
                following:action.payload.following,
                created:action.payload.created_at,
                repos:action.payload.public_repos,
                nodata:true
            }
        case 'ADD_NAME':
            return{
                ...state,
                wish:[...state.wish,action.payload]
            }
         case 'REPO':
            return{
                ...state,
                 reposit:action.payload
            }
        // case 'ADD_REPO':
        //     return{
        //         ...state,
        //         reposit:[...state.reposit,action.payload]
        //     }
        case 'CONTRIBUTE':
            return{
                ...state,
                contributors:[action.payload]
            }
        default:
            return state
    }
}
 export default counterReducer
 