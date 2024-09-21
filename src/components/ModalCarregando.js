import React, { useState, useEffect } from 'react';
import Carregando from './Carregando';
import { Modal, StyleSheet, View } from 'react-native';
import { BRANCO } from '../constants/Cores';

export const ModallCarregando = ({ usuario, closeModal }) => {
    const [modalVisible, setModalVisible] = useState(false);


    function setarModal() {


        setModalVisible(!modalVisible)
    }

    return (

        <Modal>
            <View style={styles.viewModal}>
                <Carregando />
            </View>
        </Modal>


    );
};

const styles = StyleSheet.create({
    viewModal: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
    }

})

