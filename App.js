import React, { useState } from "react";
import { View, StyleSheet, Text as Text1, TouchableOpacity, } from "react-native";
import { FlatList, Spacer, Avatar, VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading, Stack, Pressable, ScrollView } from "native-base";
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, createIconSet, Fontisto } from '@expo/vector-icons';
import { styles } from "styled-system";
import SGA from './SGA';


export default App = () => {
  const [selected, setSelected] = useState(1);
  const [sga, setSga] = useState(false);
  const data = [
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "5",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "2",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ]
  return (
    <NativeBaseProvider flex='1'>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      {sga === false ? (
        <>
          <Box flex={1} safeAreaTop backgroundColor="#6200ee" />
          
          <Box backgroundColor='#f5f5f5' h={{ base: '100%' }}>
            <HStack bg='#f5f5f5' px="1" py="7" justifyContent='space-between' alignItems='center'>
              <HStack space="4" alignItems='center'>
                <Text color="grey" fontSize="32" fontWeight='light' px='6' shadowOffset={width=3, height=3}>Swipe<Text color="#7f39b0" fontSize="32" fontWeight='light' shadow='3' px='4'>Up</Text></Text>
              </HStack>
              <HStack space="2">
                <Text color='grey' fontSize='24' fontWeight='bold' >Amigos</Text>
                <IconButton icon={<Icon as={<AntDesign name="down" size={24} color="black" />}
                  color="#7f39b0" size='sm' marginRight='5' />} />
              </HStack>
            </HStack>
            <ScrollView>
              <HStack space="4" alignItems='center'>
                <Text color="#965695" fontSize="32" fontWeight='bold' px='7'>Chats</Text>
              </HStack>
              <HStack space="4" alignItems='center'>
                <Text color="black" fontSize="20" fontWeight='bold' px='8'>privado</Text>
              </HStack>
              <Center>
                <Box
                  w={{
                    base: "90%",
                    md: "25%",

                  }}
                  marginTop='5'
                  borderRadius='20'
                  shadow='3'
                  padding='5'
                  backgroundColor='white'
                >
                  <Heading pt="5" pb="5" space={2} borderBottomWidth='1' borderStyle='dashed' borderRadius='10' borderColor='grey' justifyContent='space-between'>
                    <Center w={{base:'100%'}}>
                      <Stack>
                        <HStack space={2}>
                          <VStack alignSelf='flex-start'>
                            <Text color="grey" fontSize="24" fontWeight='bold'>Amigos<Fontisto name="smiley" size={24} color="black" /> <Fontisto name="smiley" size={24} color="black" /></Text>
                          </VStack>
                         <Box><VStack alignItems='flex-end' marginLeft='20' flexDirection='row' flexWrap='wrap'>
                            <Text alignSelf='center'>En Linea </Text>
                            <MaterialCommunityIcons name="numeric-4-circle" size={28} color="#4B981F" alignSelf="center" />
                          </VStack></Box> 
                        </HStack>
                        </Stack>
                        
                        </Center>
                  </Heading>
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Box
                        marginTop='4'
                      >
                        <HStack space={3} justifyContent="space-between">
                          <Avatar
                            size="48px"
                            borderWidth='2'
                            borderColor='green.700'
                            source={{
                              uri: item.avatarUrl,
                            }}
                          />
                          <VStack>
                            <Text
                              _dark={{
                                color: "warmGray.50",
                              }}
                              color="coolGray.800"
                              bold
                            >
                              {item.fullName}
                            </Text>
                            <Text
                              color="coolGray.600"
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {item.recentText}
                            </Text>
                          </VStack>
                          <Spacer />
                          <MaterialCommunityIcons name="numeric-1-circle" size={28} color="#965695" alignSelf="center" />
                        </HStack>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </Box>
              </Center>
              <HStack space="4" alignItems='center' marginTop='4'>
                <Text color="black" fontSize="20" fontWeight='bold' px='8'>Match</Text>
              </HStack>
              <Center paddingBottom='3'>
                <Box
                  w={{
                    base: "90%",
                    md: "25%",

                  }}
                  marginTop='5'
                  borderRadius='20'
                  shadow='3'
                  padding='3'
                  backgroundColor='white'
                >
                  <Heading pt='5' pb="5" space={2} alignItems='flex-start' borderBottomWidth='1' borderStyle='dashed' borderRadius='10' borderColor='grey'  >

                    <Stack>
                      <HStack >
                        <VStack alignSelf='flex-start'>
                          <Text color="grey" fontSize="24" fontWeight='bold'>Amigos<Fontisto name="smiley" size={24} color="black" /> <Fontisto name="smiley" size={24} color="black" /> Y:</Text>
                        </VStack>

                      </HStack></Stack>
                  </Heading>

                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Box
                        borderBottomWidth='1'
                        borderColor='grey'
                        borderRadius='10'
                      >
                        <HStack space={4} justifyContent="space-between" padding='3'>
                          <VStack ><Text fontSize='24' fontWeight='bold' color='grey'>Las Locas</Text>
                            <HStack><Box marginRight='10'>
                              <MaterialCommunityIcons alignSelf='center' name="crown-outline" size={32} color="grey" />
                            </Box>

                              <VStack alignSelf='center'>
                                <Text
                                  _dark={{
                                    color: "warmGray.50",
                                  }}
                                  color="coolGray.800"
                                  bold
                                >
                                  {item.fullName}
                                </Text>
                                <Text
                                  color="coolGray.600"
                                  _dark={{
                                    color: "warmGray.200",
                                  }}
                                >
                                  {item.recentText}
                                </Text>
                              </VStack>
                              <Spacer />

                            </HStack>
                          </VStack>
                          <Box alignSelf='center'><MaterialCommunityIcons name="numeric-7-circle" size={28} color="#965695" alignSelf='center' /></Box>
                        </HStack>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </Box>
              </Center >
              </ScrollView>
              <Center >
                <HStack space={4} w={{base:'90%'}} justifyContent='space-between' padding='2' safeAreaBottom shadow={6}>
                  <TouchableOpacity
                    cursor="pointer"
                    opacity={selected === 0 ? 1 : 0.5}
                    py="3"
                    flex={1}
                    onPress={() => setSelected(0)}>
                    <Center>
                      <MaterialCommunityIcons name="alpha-s-circle-outline" size={48} color="grey" />
                    </Center>
                  </TouchableOpacity>
                  <TouchableOpacity
                    cursor="pointer"
                    opacity={selected === 0 ? 1 : 0.5}
                    py="3"
                    flex={1}
                    onPress={() => setSelected(0)}>
                    <Center>
                      <MaterialCommunityIcons name="alpha-p-circle-outline" size={48} color="grey" />
                    </Center>
                  </TouchableOpacity>
                  <TouchableOpacity
                    backgroundColor='#965695'
                    cursor="pointer"
                    shadow='3'
                    py="2"
                    flex={1}
                    onPress={() => setSelected(2)}
                  >
                    <Box bg='#965695' borderRadius='100' padding='2'><Center>
                      <Ionicons name="chatbubble-sharp" size={28} color="white"  alignSelf='center' />

                    </Center></Box>


                  </TouchableOpacity>
                  <TouchableOpacity
                    cursor="pointer"
                    opacity={selected === 3 ? 1 : 0.5}
                    py="2"
                    flex={1}

                    onPress={() => {
                      setSelected(3)
                      setSga(true)
                    }}
                  >
                    <Center>
                      <Avatar
                        size="48px"
                        borderWidth='2'
                        borderColor='green.700'
                        source={{
                          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
                        }}
                      />

                    </Center>
                  </TouchableOpacity>
                </HStack>
              </Center>
            
          </Box>
          

        </>) : (<SGA setSga={setSga} sga={sga} />)
      }

    </NativeBaseProvider >

  )
}
const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 99,
  },
  textline:{
///
color:"grey"
  },
  status: {
    marginTop: 3,
    height: 20,
    width: 20,
    //  borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#61dafb',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
});