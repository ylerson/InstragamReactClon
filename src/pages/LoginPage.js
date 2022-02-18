import React, {useState} from 'react';


import {useNavigate} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'
import { FcGoogle } from "react-icons/fc";

import { client } from '../client';
import { Loading } from '../components/Loading';

const img = 'https://mott.marketing/wp-content/uploads/2017/11/Funciones-de-Instagram-1024x594.png'

export const LoginPage = () => {

   
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const responseGoogle = (response) =>{

        const tokenUser =  { ...response.tokenObj, status: 'connected'};
        sessionStorage.setItem('tokenUser', JSON.stringify(tokenUser))
        sessionStorage.setItem('iDUser', response.profileObj.googleId)
        const {name, googleId, imageUrl} = response.profileObj;
        setLoading(true)
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image:imageUrl,
        }

        client.createIfNotExists(doc)
            .then(()=>{
                setLoading(false)
                // console.log(response)
                navigate('/', {replace: true})
            })
    }

    if(loading) return <Loading />

    return (
        <div className='main_login'>
           <div className='box_login'>
                <div className='imagen_bg'>
                    <img src={img} alt="" />
                </div>
                <div className='login_form'>
                <div className='logo'><img src="assets/ig-logo.png" alt="" /></div>
                <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={renderProps => (
                        <button
                            className='google_login_button'
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}>
                                <FcGoogle className='logo_google' /> Sign in With Google
                        </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy='single_host_origin'
                    />
                </div>

           </div>
           <div className='footer_login'>
               This page is an Instagram Clone.
           </div>
        </div>
    )
}
