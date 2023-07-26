import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather } from '@expo/vector-icons'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.green, SIZES.xSmall)}>
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
          <TextInput value='' onPressIn={()=>{}} placeholder="What's your looking for" style={styles.searchInput}/>
        </View>
      </View>

    </View>
  )
}

export default Welcome
