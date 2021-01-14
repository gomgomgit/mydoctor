import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor10 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()} />
      <List avatar={DummyDoctor10} name="Alex" desc="wanita" type="next" onPress={() => navigation.navigate('Chatting')} />
      <List avatar={DummyDoctor10} name="Alex" desc="wanita" type="next" onPress={() => navigation.navigate('Chatting')} />
      <List avatar={DummyDoctor10} name="Alex" desc="wanita" type="next" onPress={() => navigation.navigate('Chatting')} />
      <List avatar={DummyDoctor10} name="Alex" desc="wanita" type="next" onPress={() => navigation.navigate('Chatting')} />
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex:1
  }
})
