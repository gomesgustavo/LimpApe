import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LimpApe</Text>
        <Text style={styles.instructions}>Cozinha: Gustavo</Text>
        <Text style={styles.instructions}>Sala/Corredor : Élvis</Text>
        <Text style={styles.instructions}>Banheiro : Gustavo</Text>
        <Text style={styles.instructions}>Área de Serviço : Jorge</Text>
        <Text style={styles.instructions}>Retirada dos Lixos : Élvis</Text>
        <Text style={styles.instructions}>Interior da Geladeira : Élvis e Gustavo</Text>
        <Text style={styles.instructions}>Interior dos Armarios : Jorge</Text>
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
  }
});
