import  React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Authentication from '../Utils/Authentication'

export const ProtectedRouter = ({component: Component, ...rest}) =>{
    return (
        <Route 
        {...rest} 
        render={props => {
                if (Authentication.isTokenExist()){
                    return <Component {...props} />
                }else{
                    return <Redirect to={
                        {
                            pathname: "/login"
                        }
                    } />
                }
                
            }
        } 
        />
    )
}