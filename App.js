import React, { Component } from "react";
import { StyleSheet, Text, View  } from "react-native";
import { List, ListItem } from 'react-native-elements'

const list  = [
  {
    nome: 'Gustavo',
    foto: 'foto',
    cômodo: 'Cozinha'
  },
  {
    nome: 'Élvis',
    foto: 'foto',
    cômodo: 'Sala/Corredor'
  },
  {
    nome: 'nome',
    foto: 'foto',
    cômodo: 'Banheiro'
  },
  {
    nome: 'Jorge',
    foto: 'foto',
    cômodo: 'Área de Serviço'
  },
  {
    nome: 'Élvis',
    foto: 'foto',
    cômodo: 'Retirada dos Lixos'
  },
  {
    nome: 'Interior da Geladeira',
    foto: 'foto',
    cômodo: 'Élvis e Gustavo'
  },
  {
    nome: 'Jorge',
    foto: 'foto',
    cômodo: 'Interior dos Armarios'
  }
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LimpApe</Text>
        <List containerStyle={{marginBottom: 20}}>
  {
    list.map((l) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={l.name}
        title={l.name}
      />
    ))
  }
</List>
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
    fontSize: 20,
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
  }
});