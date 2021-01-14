import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, DummyDoctor4, JSONDoctorCategory } from '../../assets'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.scrollWrapper}>
              <View style={styles.categories}>
                {
                  JSONDoctorCategory.data.map(item => {
                    return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate("ChooseDoctor")} />
                  })
                }
              </View>
            </View>
          </ScrollView>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <View style={styles.wrapperSection}>
            <RatedDoctor name="Alexa Rachel" desc="Pediatrician" avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name="Sunny Frank" desc="Dentist" avatar={DummyDoctor2} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name="Min Poe Lin" desc="Pediatrician" avatar={DummyDoctor3} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name="Nairobi Putri" desc="Pediatrician" avatar={DummyDoctor4} onPress={() => navigation.navigate('DoctorProfile')} />
          </View>
          <Text style={styles.sectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 8,
    paddingHorizontal: 16
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 200
  },
  scrollWrapper: {
    marginHorizontal: 11
  },  
  categories: {
    flexDirection: 'row'
  }
})
