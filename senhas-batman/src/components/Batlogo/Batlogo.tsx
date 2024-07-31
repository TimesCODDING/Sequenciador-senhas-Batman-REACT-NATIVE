import React from 'react';
import {Text, Image} from 'react-native';

import { styles } from './BatlogoStyles';
import batlogo from '../../../assets/bat-logo.png'


export function Batlogo() {
  return (
    <>
        <Text style={styles.titulo}>
            BAT PASS GENERATOR
        </Text>

        <Image source={batlogo} style={styles.imagem}/>
    </>
  );
}