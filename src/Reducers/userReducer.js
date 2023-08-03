import { GET_USER_LIST, USER_LOGIN, USER_REG } from "../Actions/ActionType"

export const UserReducer=(state,action)=>{
    if(action.type===USER_LOGIN){
        return {...state,isLogin:true,
            isError:false,isMessage:action.payload.message
            }
        }

            
   else if(action.type===USER_REG){
        return {...state,isReg:true,
            isError:false,isMessage:action.payload.message
            }
     
    }  else if(action.type===GET_USER_LIST){
        console.log(action);
        return {...state,empInfo:action.payload,
            isError:false,isMessage:action.payload
            }
        }
       

}
    // else{
    //     return {...state,isLogin:false,
    //         isError:true,isMessage:action.payload.message
    //         }
    
    //     }
  
    // else{
    //         return {...state,isLogin:false,
    //             isError:true,isMessage:action.payload.message
    //             }
    //     }
    // }

  
    // throw new Error(`No Matching ${action.type}- action type`)

// }