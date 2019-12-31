import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native'
import CustomText from './components/CustomText'

class App extends Component {
  render() {
    const { container, customTextStyle } = styles
    
    return (
      <SafeAreaView style={container}>
        <View>
          <CustomText textType='light' style={[customTextStyle, { color: 'blue' }]}>Light</CustomText>
          <CustomText textType='regular' style={[customTextStyle, { color: 'red' }]}>Regular</CustomText>
          <CustomText textType='bold' style={[customTextStyle, { color: 'green' }]}>Bold</CustomText>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customTextStyle: {
    fontSize: 16,
    marginBottom: 8
  }
})

export default App
