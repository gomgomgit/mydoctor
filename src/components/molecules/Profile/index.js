import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser, IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({ name, desc, isRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar} source={DummyUser} />
        {isRemove && <IconRemovePhoto style={styles.iconPhoto} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },  
  avatarWrapper: {
    padding: 10,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 130/2,
    width: 130,
    height: 130,
    marginBottom: 16
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110/2
  },
  iconPhoto: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.primary
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    color: colors.text.secondary
  }
})
