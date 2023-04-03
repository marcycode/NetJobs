import React from 'react'
import { useState } from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import axios from 'axios'
import styles from './nearbyjobs.style'

import {COLORS,SIZES} from '../../../constants'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import UseFetch from '../../../hook/useFetch'


const Nearbyjobs = () => {
  const router = useRouter();
  const {data,isLoading,error} = UseFetch('search',{
    query: 'React developer',
    num_pages: "1",
  });
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity><Text styles={styles.headerBtn}>Show All</Text></TouchableOpacity>

      </View>
      <View style={styles.cardsContainer}>
        {isLoading? (
           <ActivityIndicator size ="large" color={COLORS.primary}/>
        ): error ? (
          <Text> Something went wrong</Text>
        ):  (
          data?.map( (job) => (
            <NearbyJobCard 
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}
            
            />
          ))
        )} 
      </View>
    </View>
  )
}

export default Nearbyjobs