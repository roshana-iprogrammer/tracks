import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignIn()
    }, [])

    return (
        <View style={styles.container} >
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign Up For Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
         
        </View>
    );

};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    },

    
});

export default SignupScreen;


