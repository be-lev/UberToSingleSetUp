import React from 'react'
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth'
import {app , provider, auth} from '../firebase'

function login() {
    const router = useRouter();

    useEffect(() => {
       onAuthStateChanged(auth, user => {
           if(user){
               router.push('/')
           }
       })
    }, [])
    return (
        <Wrapper>
            <UserImage src="https://i.imagesup.co/images2/17d67f93fa50e0e92af0eac27f500200c4320d53.jpg" />
            <Title>Log in to access your account</Title>
            <HeadImage src="https://i.pinimg.com/736x/b9/02/b6/b902b699082c933562410bc135b700eb.jpg" />
            <SignInButton onClick= {()=>signInWithPopup(auth,provider)}>
                Sign in with google
            </SignInButton>
        </Wrapper>
    )
}

export default login

const Wrapper = tw.div`
bg-gray-200 h-screen w-screen flex flex-col p-4
`;
const UserImage = tw.img`
h-20 w-20 object-contain self-start rounded-full border border-gray-200 p-2
`;
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`;
const Title = tw.div`
text-5xl pt-4 text-gray-500
`;
const HeadImage = tw.img`
object-contain w-auto h-300
`;