import { Keyboard, KeyboardAvoidingView, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'

import RegisterForm from '../components/Auth/RegisterForm'
import SearchBar from '../components/Search/SearchBar'
import { Searchbar } from 'react-native-paper'

export default function auth() {
    const [showLogin, setShowLogin] = useState(false);

    const changeForm = () => setShowLogin(!showLogin);
    return (
        <>
        <ScrollView>
            <KeyboardAvoidingView>
                {showLogin ? <Text>Inicia sesion </Text> : <RegisterForm changeForm={changeForm}/>}
            </KeyboardAvoidingView>
        </ScrollView>
        </>
    );
}
