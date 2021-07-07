import { register } from 'jscodeshift/src/collections/JSXElement';
import React, {useContext, useState} from 'react'
import { View, Text } from 'react-native'
import { FirebaseContext } from '../../FirebaseContext'

const Register = () => {
    const firebase = {FirebaseContext};
    
    const {register} = useContext(FirebaseContext);




    
    register("developTest12@test.com", "123456").then(
        user => console.log(user)).catch(error => console.log(error))

    return (
        <View>
           {/* <Input
                placeholder='Nom'
                onChangeText={setNom}
                value={nom}
            />

            <Input
                placeholder='Email'
                onChangeText={setEmail}
                value={email}
            />

            <Input
                placeholder='Mot de passe'
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
            />

            <Input
                placeholder='Confirmer le mot de passe'
                onChangeText={setConfirmpassword}
                secureTextEntry={true}
                value={confirmPassword}
                
            /> */}
        </View>
    )
}

export default Register;
