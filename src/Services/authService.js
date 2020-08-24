import {ApiClient} from '../Util/ApiClient'


export class AuthService{


    static async authUser(){
        try{
            const response = await ApiClient.get('/auth/user')
           return response
        }catch(err){
            return err
        }
       
    }

    static async login(model){
        try{
            const response = await ApiClient.post('/users/login',model)
           return response
        }catch(err){
            return err
        }
       
    }

    static async register(model){
        try{
            const response = await ApiClient.post('/auth/register',model)
           return response
        }catch(err){
            return err
        }
       
    }

    static async sendResetEmail(email) {
        return ApiClient.post(
          'password/email',
          { email }
        )
      }

    static async forgetPassword(
        password,
        confirm_password,
        token,
        email
      ) {
        return ApiClient.post(
          'password/reset',
          {
            email,
            password,
            confirm_password,
            token,
          }
        )
      }

    static async logout(){
        try{
            await ApiClient.get('/auth/logout')
            const response = ApiClient.unsetToken()
           return response
        }catch(err){
            return err
        }
       
    }
}
