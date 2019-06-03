import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Animated } from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50)
    }

    Animated.sequence([
      Animated.timing(
        this.state.LarAnimada,
        {
          toValue: 300,
          duration: 2000
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 200,
          duration: 2000
        }
      )
    ]).start()

  }

  render() {

    return (
      <View style={styles.container}>
        <Animated.View style={{width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: 'blue', justifyContent: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
})