import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Modal } from "react-native";
import { List, ListItem, Button, Icon } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const B = props => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;

const list = [
  {
    nome: 'Jorge',
    avatar_url: require("./imgs/jorge.jpg"),
    comodo: 'Cozinha',
    limpo: false
  },
  {
    nome: 'Gustavo',
    avatar_url: require("./imgs/gustavo.jpg"),
    comodo: 'Sala/Corredor',
    limpo: true
  },
  {
    nome: 'Williams',
    avatar_url: require("./imgs/williams.jpg"),
    comodo: 'Banheiro',
    limpo: false
  },
  {
    nome: 'Leandro',
    avatar_url: require("./imgs/leandro.jpg"),
    comodo: 'Área de Serviço',
    limpo: false
  },
  {
    nome: 'Élvis',
    avatar_url: require("./imgs/elvis.jpg"),
    comodo: 'Retirada dos Lixos',
    limpo: false
  },
  {
    nome: 'Interior da Geladeira',
    avatar_url: require("./imgs/aperto-de-maos.jpg"),
    comodo: 'Élvis e Gustavo',
    limpo: true
  },
  {
    nome: 'Jorge',
    avatar_url: require("./imgs/jorge.jpg"),
    comodo: 'Interior dos Armarios',
    limpo: false
  }
]


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      text: 'Justifique aqui seu motivo'
    }
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./imgs/bg.png')} style={styles.backgroundImage}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
              <View>
                <Text style={{ fontSize: 35, textAlign: "center", fontWeight: "bold" }}>Cozinha</Text>
                <Text style={{ fontSize: 18, marginTop: 20, textAlign: "center" }}>A limpeza da cozinha inclui: Geladeira, fogão, pia, mircroondas...</Text>
                <Text style={{ marginTop: 20, marginLeft:5}}>Data Inicial: <B>01/10/2018</B> </Text>
                <Text style={{ marginLeft:5}}>Data Final: <B>07/10/2018</B> </Text>
                <View style={{ marginTop: 6}}>
                <Button
                  backgroundColor="#20B2AA"
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  title='LIMPEI!' />
                </View>
                <Text style={{ fontSize: 18, marginTop: 20, textAlign: "center"}}>Caso aconteça algum imprevisto que te impossibilite fazer a limpeza, avise para o pessoal:</Text>
                <TextInput
                  style={{ height: 100, borderColor: 'gray', borderWidth: 1, margin:15 }}
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                />
                <Button
                  backgroundColor="#FF6347"
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  title='JUSTIFICAR' />
              </View>
            </View>
          </Modal>
          <Text style={styles.welcome}><B>L</B>imp<B>A</B>pê</Text>
          <List containerStyle={{ marginBottom: 20 }}>
            {
              list.map((l) => (
                <ListItem
                  roundAvatar
                  avatar={l.avatar_url}
                  key={l.nome}
                  title={l.comodo}
                  subtitle={l.nome}
                  rightIcon={l.limpo == true ? <Icon name={'check-circle'} color="#20B2AA" size={30} /> : <Icon name={'error'} color="#d68080" size={30} />}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                />
              ))
            }
          </List>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 30,
    marginTop: 35,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height
  }
});