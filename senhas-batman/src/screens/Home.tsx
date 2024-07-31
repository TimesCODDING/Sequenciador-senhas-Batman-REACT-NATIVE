import { StatusBar, } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import styles from '../screens/Style';
import { Batlogo } from '../components/Batlogo/Batlogo';
import { BatButtom } from '../components/Batlogo/BatButtom/BatButtom';


export default function Home(){
    return(
        <View style={styles.appcontainer}>
            
            <View style={styles.logoContainer}>
                <Batlogo/>
            </View>

            <View style={styles.inputContainer}>
                <BatButtom/>
            </View>

            <StatusBar style="light" />
        </View>
    )
}

