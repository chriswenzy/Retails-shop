import React from 'react'
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
            const response = await ApiClient.post('/auth/login',model)
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
