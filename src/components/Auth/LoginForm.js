import * as Yup from 'yup';

import { Button, TextInput } from 'react-native-paper';
import React ,{ useState }from 'react'
import { Text, View } from 'react-native'

import { FormStyles } from '../../Styles';
import Toast from 'react-native-root-toast';
import { loginApi } from '../../api/user';
import { useFormik } from 'formik';

export default function LoginForm(props) {
    const { changeForm } = props;

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await loginApi(formData);
                if(response.statusCode) throw 'Error en el usuario o contraseña';
            } catch (error) {
                Toast.show('Hubo un error al iniciar sesión, intentalo nuevamente', {
                    position: Toast.positions.CENTER,
                });
                setLoading(false)
            }
        }
    })
    
    return (
        <View style={[FormStyles.view]}>
            <Text style={[FormStyles.boxModel, FormStyles.btnText]}>
                INICIAR SESIÓN
            </Text>
            <Text style={[FormStyles.boxModel, FormStyles.btnText]}>
                Inicia sesión en tu cuenta de GreenMode para realizar un pago rápido.            
            </Text>
            <Text style={[FormStyles.boxModel, FormStyles.btnText]}>
                Correo electrónico            
            </Text>
            <TextInput 
            label= 'Email'
            style={[FormStyles.input]}
            onChangeText={(text) => formik.setFieldValue('identifier', text)}
            value={formik.values.identifier}
            error={formik.errors.identifier}

            />
            <Text 
            style={[FormStyles.boxModel, FormStyles.btnText]}
            onChangeText={(text) => formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}>
                Contraseña            
            </Text>
            <TextInput 
            secureTextEntry
            label= 'Contraseña'
            style={[FormStyles.input]}
            />
            <Button 
            mode='contained'
            style={[FormStyles.btnRegister, FormStyles.boxModel]}
            onPress={formik.handleSubmit}
            loading={loading}
            >
                INICIAR SESIÓN
            </Button>
            <Button 
                mode='text'
                onPress={changeForm}>
                ¿No tenes cuenta?  Registrate aquí
            </Button>
            <Text 
            style={[FormStyles.termConditions]}  
            >¿Olvidaste tu contraseña?</Text>
        </View>
    )
}

function initialValues() {
    return {
        identifier: '',
        password: '',
    }
};

function validationSchema() {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    }
}