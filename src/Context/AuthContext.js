import React from 'react'
import {AuthService} from '../Services/authService'
import {useHistory} from 'react-router-dom'
import {useAlert} from 'react-alert'


const defaultProps = {
    login: async(model)=>{},
    logout:()=>{},
    user:null,
    refresh:()=>{}
}

export const AuthContext = React.createContext(defaultProps)
export const AuthConsumer = AuthContext.Consumer

export const AuthProvider = ({children})=>{
    const history = useHistory()
    const [user,setUser] = React.useState(null)
    const alert = useAlert()


const refresh = async() =>{
    try{

        const response = await AuthService.authUser()
        if(response.status === 200){
            setUser(response.data.user)
        }else{
            setUser(null)
        }

    }catch(err){
        setUser(null)
    }
   
}

const login = async (model)=>{
    const response = await AuthService.login(model)
    


    if(response.status === 200){
        setUser(response.data.user)
        alert.success('Login Successful')
        refresh()
    }

    if(response.data.status === 400){
        alert.error('Invalid Credentials')
    }
    

}

const logout = async () => {
    await AuthService.logout()
    setUser(null)
    alert.success('User logged out successfully')
    history.push('/')
  }

return (
    <AuthContext.Provider
      value={{ user, login, logout, refresh}}
    >
      {children}
    </AuthContext.Provider>
  )

}