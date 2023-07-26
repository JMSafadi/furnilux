import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import styles from './search.styles'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value='' 
            onPressIn={()=>{}} 
            placeholder="What are your looking for" 
            style={styles.searchInput}
            />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name='search' size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search
