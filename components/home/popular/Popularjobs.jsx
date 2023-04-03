import React from 'react'
import { useState } from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import axios from 'axios'
import styles from './popularjobs.style'

import {COLORS,SIZES} from '../../../constants'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import UseFetch from '../../../hook/useFetch'
import { set } from 'react-native-reanimated'


const Popularjobs = () => {
  const router = useRouter();
  const {data,isLoading,error} = UseFetch('search',{
    query: 'React developer',
    num_pages: "1",
  });
  //console.log(data);
  const [selectedJob,setselectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setselectedJob(item.job_id);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity><Text styles={styles.headerBtn}>Show All</Text></TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>
        {isLoading? (
           <ActivityIndicator size ="large" color={COLORS.primary}/>
        ): error ? (
          <Text> Something went wrong</Text>
        ):  (
          <FlatList data = {data} showsHorizontalScrollIndicator={false}
          renderItem={(({item})=> (
            <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress}/>
          ))}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal/>
        )} 
      </View>
    </View>
  )
}

export default Popularjobs