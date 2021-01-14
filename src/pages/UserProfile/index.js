import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gap, Header, List, Profile } from '../../components'
import { colors } from '../../utils'

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Anya Taylor Joy" desc="Film Actor" />
      <Gap height={14} />
      <List name="Edit Profile" desc="last update yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
      <List name="Language" desc="last update yesterday" type="next" icon="language" />
      <List name="Rate Us" desc="last update yesterday" type="next" icon="rate" />
      <List name="Help Center" desc="last update yesterday" type="next" icon="help" />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
})
