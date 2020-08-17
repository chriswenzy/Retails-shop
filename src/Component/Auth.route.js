import React, { useContext } from 'react'
import { useAlert } from 'react-alert'
import { Redirect, Route} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


export const SpecialRoute = ({role,isPrivate,...props}) => {
  
  const { user} = useContext(AuthContext)
  const alert = useAlert()
  

  if (role !== undefined && role !== user.data.roles.id) {
    alert.error('You are not allowed access to that page')

    return (
      <Redirect
        to={{
          pathname: '/',
          state: {from:props.location},
        }}
      />
    )
  }

  

  if(user && !isPrivate){
    return(
    <Redirect
      to={{
        pathname:'/dashboard',
        state:{from:props.location}
      }
      }
    />)
  }else if(!user && isPrivate)
  {
    return(
  <Redirect
        to={{
          pathname:'/',
          state:{from:props.location}
        }
        }
      />
      )
  }else{
    return <Route {...props}/>
  }

  
}

const AuthedRoute = (isPrivate) => (props) => (
  <SpecialRoute {...{ isPrivate, ...props }} />
)

export const InternalRoute = AuthedRoute(true)
export const ExternalRoute = AuthedRoute(false)
