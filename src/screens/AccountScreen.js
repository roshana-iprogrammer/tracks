import React, { useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";
//import { SafeAreaView } from "react-navigation"; -  not working 
import { SafeAreaView } from "react-native-safe-area-context"; 


const AccountScreen = () => {

    const { signout } = useContext(Context);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <View>
                <Text style={{ fontSize: 48 }}>Account Screen</Text>
                <Spacer>
                    <Button title="Sign Out" onPress={signout} />
                </Spacer>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default AccountScreen;


