import {View, Text} from 'react-native'
import { useState } from 'react';
import {ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

import {COLORS, icons,images,SIZES} from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Home = () => {
  const router = useRouter();
  const [searchTerm,setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: COLORS.lightWhite}}>
    <Stack.Screen options={{headerStyle: {backgroundColor: COLORS.lightWhite}, headerShadowVisible: false, 
    headerLeft: () => (
      <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"> </ScreenHeaderBtn>
    ),
    headerRight:() => (
      <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"></ScreenHeaderBtn>

    ),
    headerTitle: ""
    }}
    />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex:1,padding: SIZES.medium}}>
        <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick = {() => {
          if(searchTerm){
            router.push(`/search/${searchTerm}`)
          }

        }}/>
        <Popularjobs/>
        <Nearbyjobs/>
        </View>

    </ScrollView>
      
  



    </SafeAreaView>
  )
}
export default Home;