import React from 'react'
import { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { IconAddPhoto, IconRemovePhoto, ILUserPhotoNull } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
    const [hasPhoto, setHasPhoto] = useState(false)
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILUserPhotoNull} style={styles.avatar} />
                        {hasPhoto ? 
                            <IconRemovePhoto style={styles.addPhoto} />
                        :
                            <IconAddPhoto style={styles.addPhoto} />
                        }
                    </View>
                    <Text style={styles.name}>Anya Taylor Joy</Text>
                    <Text style={styles.profession}>Film Actor</Text>
                </View>
                <View>
                    <Button disable title="Upload and Continue" onPress={() => navigation.replace('MainApp')} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 40,
        paddingBottom: 64
    }, 
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    }
})
