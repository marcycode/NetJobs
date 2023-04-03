import React from 'react'
import { useState } from 'react'
import { View, Text,TextInput,Image,FlatList } from 'react-native'


import {useRouter} from 'expo-router'
import {icons,SIZES} from '../../../constants'

import styles from './welcome.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const jobTypes = ["Full-time","Part-time","Contractor"]

const Welcome = ({searchTerm,setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType,setactiveJobType] = useState('Full-time')
  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}> Welcome to NetJobs! </Text>
      <Text style={styles.welcomeMessage}>Find your Perfect Job Here</Text> 
     </View>
     <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} value={searchTerm} onChangeText={(text) => { setSearchTerm(text)}} placeholder='What are you looking for? '/>

      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
      </TouchableOpacity>
     </View>
     <View style={styles.tabsContainer}>
      <FlatList data={jobTypes} 
      renderItem={({item}) => (
        <TouchableOpacity style={styles.tab(activeJobType,item)}onPress={() => {
          setactiveJobType(item);
          router.push(`/search/${item}`)
        }}>
          <Text style={styles.tabText(activeJobType,item)}>{item}</Text>

        </TouchableOpacity>

      )}
      keyExtractor={item => item}
      contentContainerStyle={{columnGap: SIZES.small}}
      horizontal/>

     </View>

     <View>
      
     </View>
     
    </View>
  )
}

export default Welcome