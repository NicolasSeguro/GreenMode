import { Keyboard, KeyboardAvoidingView, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'

import LoginForm from '../components/Auth/LoginForm'
import RegisterForm from '../components/Auth/RegisterForm'

export default function auth() {
    const [showLogin, setShowLogin] = useState(false);

    const changeForm = () => setShowLogin(!showLogin);
    return (
        <>
        <ScrollView>
            <KeyboardAvoidingView>
                {showLogin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm}/>}
            </KeyboardAvoidingView>
        </ScrollView>
        </>
    );
}
