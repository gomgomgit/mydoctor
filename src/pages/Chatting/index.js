import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header } from '../../components'
import InputChat from '../../components/molecules/InputChat'
import { colors, fonts } from '../../utils'

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Nairobi Putri Hayza" type="dark-profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Selasa, 23 April 2001</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    flex: 1
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20
  }
})
