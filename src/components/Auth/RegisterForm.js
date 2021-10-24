import * as Yup from 'yup'

import { Button, TextInput } from 'react-native-paper'
import { Text, View } from 'react-native'

import { FormStyles } from '../../Styles'
import React from 'react'
import Toast from 'react-native-root-toast'
import { registerApi } from '../../api/user'
import {useFormik} from 'formik'
import { useState } from 'react'

export default function RegisterForm(props) {
    const { changeForm } = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                await registerApi(formData);
                changeForm();
                
            } catch (error) {
                setLoading(false)
                Toast.show('Hubo un error al registrar el usuario, intentalo nuevamente', {
                    position: Toast.positions.CENTER,
                });
            }
        }
    })
    return (
        <View style={[FormStyles.view]}>
            <Text style={[FormStyles.boxModel, FormStyles.btnText]}>
                REGISTRATE
            </Text>
            <Text>
                Crea una cuenta en GreenMode y obtén las siguientes ventajas:
            </Text>
            <Text style={[FormStyles.listRegister]}>- Pago rapido</Text>
            <Text style={[FormStyles.listRegister]}>- Cambios y devoluciones sin estrés</Text>
            <Text style={[FormStyles.listRegister]}>- Ofertas y descuentos exclusivos</Text>
            <TextInput 
            label="Email"
            style={[FormStyles.input]}
            onChangeText={(text) => formik.setFieldValue('email', text)}
            value={formik.values.email}
            error={formik.errors.email}
            />
            <TextInput 
            label="Contraseña"
            style={[FormStyles.input]}
            secureTextEntry
            onChangeText={(text) => formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}
            />
            <TextInput 
            label="Repetir contraseña"
            style={[FormStyles.input]}
            secureTextEntry
            onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
            />       
            <Button 
            style={[FormStyles.btnRegister, FormStyles.boxModel]} 
            mode="contained"
            onPress={formik.handleSubmit}
            loading={loading}
            >Registrarme</Button>  
            <Button 
            style={[]} 
            mode="text" 
            onPress={changeForm}
            >¿Ya tenés cuenta?  Inicia sesión aquí</Button>
            <Text 
            style={[FormStyles.termConditions]}  
            >Términos y condiciones  / Política de privacidad</Text>
        </View>
    )
}

function initialValues() {
    return {
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    }
}

function validationSchema() {
    return {
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true),
    }
}