import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
    const { state, signin } = usecContext(Context);
    return (
        <View style={styles.container} >
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage=""
                onSubmit={()=> {}}
                submitButtonText="Sign In"
            />    
            <NavLink text="Dont have an account? Sign Up instead" 
            routeName="Signup"
            />
        </View>
        )
};


SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    }
});

export default SigninScreen;


