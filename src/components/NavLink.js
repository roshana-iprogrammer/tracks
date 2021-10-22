import React from "react";
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";


const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)} >
            <Spacer>
                <Text style={styles.link} >{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);