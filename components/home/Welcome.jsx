import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Ionicons, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        {/* <Text style={styles.welcomeTxt('#FF6C03', SIZES.xSmall)}>
          {' '}Furnilux
        </Text> */}
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          {' '}Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          {' '}Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name='search' size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
            value='' 
            onPressIn={()=>{navigation.navigate('Search')}} 
            placeholder="What are your looking for" 
            style={styles.searchInput}
            />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome
