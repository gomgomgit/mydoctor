import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILNews } from '../../../assets'
import { colors, fonts } from '../../../utils'

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={ILNews} style={styles.image} />
    </View>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  titleWrapper: {
    flex: 1,
  },  
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%'
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary
  },  
  image: {
    width: 80,
    height: 60,
    borderRadius: 11
  }
})
