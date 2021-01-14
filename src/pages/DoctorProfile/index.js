import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile } from '../../components'
import ListProfile from '../../components/molecules/ListProfile'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}> 
      <Header title="Doctor Profile" onPress={() => navigation.goBack()}  />
      <Profile name="Nairobi Putri" desc="Dokter Anak" />
      <Gap height={10} />
      <ListProfile label="Alumnus" value="Universitas Indonesia, 2020" />
      <ListProfile label="Tempat Praktik" value="Rumah Sakit Umum Bandung" />
      <ListProfile label="No. STR" value="0000116622081996" />
      <View style={styles.action}>
        <Button title="Start Consulting" onPress={() => navigation.navigate('Chatting')} />
      </View>
    </View>
  )
}

export default DoctorProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  action: {
    paddingTop: 23,
    paddingHorizontal: 40
  }
})
