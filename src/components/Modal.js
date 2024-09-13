import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import GestorDados from '../firebase/Firestore';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DARK } from '../constants/Cores';

const ModallApp = ({ closeModal, pessoa }) => {
 

  const isFocused = useIsFocused();
  useEffect(() => {

  }, [isFocused]);

  

  return (
    <View style={styles.centeredView}>

      <Modal>
        <View style={styles.centeredView}>
          <ActivityIndicator color={DARK} size={'large'} />
        </View>

      </Modal>




    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',

  },
});

export default ModallApp;
