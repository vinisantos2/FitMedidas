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
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import GestorDados from '../firebase/Firestore';
import { Usuario } from '../firebase/Usuario';
import { VERMELHO } from '../constants/Cores';
import MaskInput, { createNumberMask } from 'react-native-mask-input';


const ModallApp = ({ usuario, closeModal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const isFocused = useIsFocused();

  const gestor = new GestorDados()
  useEffect(() => {

    setAltura(usuario.AT_ALTURA)
    setNome(usuario.AT_NOME)
  }, [isFocused]);

  function setarModal() {

    usuario.AT_NOME = nome
    usuario.AT_ALTURA = altura
    const docData = usuario.toMap()
    gestor.updateUser(docData)
    setModalVisible(!modalVisible)
  }

  const decimalMask = createNumberMask({
    separator: '.',
    precision: 2,
  })

  return (
    <View>
      <Modal
        onDismiss={closeModal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStile}>Editar dados </Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              keyboardType="ascii-capable"
              placeholder="Nome"
            />

            <MaskInput
              mask={decimalMask}
              style={styles.input}
              value={altura}

              onChangeText={setAltura}
              keyboardType="decimal-pad"
              maxLength={4}
              placeholder="Altura em Metros"
            />
            <View style={styles.viewBotoes}>
              <Pressable
                style={[styles.button]}
                onPress={() => setarModal()}>
                <Text style={styles.textStyle}>Alterar Dados</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}>
        <Ionicons name="pencil-sharp" size={30} color="yellow" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#000",
    opacity: .95

  },

  viewBotoes: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },

  textStile: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'

  },
  modalView: {
    margin: 20,
    backgroundColor: '#808080',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },

  buttonClose: {
    backgroundColor: VERMELHO,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#cococo',
    marginTop: 15,
    width: '100%',
    fontSize: 25,
    color: 'black',
    padding: 15,
  },
});

export default ModallApp;
