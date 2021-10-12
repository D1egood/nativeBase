import React from "react";
import { View, StyleSheet, Text as Text1, TouchableOpacity, } from "react-native";
import {
    FlatList, Progress, AspectRatio, Spacer, Avatar, VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading, Stack, Pressable, ScrollView
} from "native-base";
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons, createIconSet, Fontisto, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { styles } from "styled-system";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default SGA = (props) => {
    const progress1 = (18 * 100) / 22;
    const progress2 = (2 * 100) / 10;
    const progress3 = (5 * 100) / 10;
    console.log(progress1);
    return (

        <NativeBaseProvider flex='1'>
            <StatusBar backgroundColor='#ffffff' />
            <Box safeAreaTop backgroundColor="#ffffff" />
            <Box backgroundColor='#F9F9F9' h={{
                base: '100%',

            }} w={{ base: '100%' }}>
                <HStack bg='#f5f5f5' px="1" py="7" justifyContent='space-between' alignItems='center'>
                    <HStack space="4" alignItems='center'>
                        <IconButton onPress={() => { props.setSga(false) }} icon={<Icon as={<AntDesign name="arrowleft" weight='14' height='14' />}
                            color="#1E2022" size='sm' marginLeft='14' />} />
                    </HStack>
                    <HStack space="1">
                        <View style={{ padding: 5 }}>
                            <TouchableOpacity>

                                <Icon as={<Ionicons name="md-notifications-sharp" size={14} color="black" />}
                                    color='#1E2022' size='sm' alignSelf='center' />
                                <View style={styles1.redcircle}>
                                    <Text style={{ fontSize: 8, color: "white" }}>3</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <IconButton icon={<Icon as={<MaterialCommunityIcons name="dots-vertical" size={24} color="black" />}
                            color="#1E2022" size='sm' marginRight='5' />} />
                    </HStack>
                </HStack>
                <ScrollView>
                    <HStack space="4" alignItems='center'>
                        <Text color="#434343" fontSize="28" fontFamily='Roboto' fontWeight='bold' px='8'>Servicios disponibles</Text>
                    </HStack>
                    <Spacer />
                    <Box marginTop='4' w={{
                        base: '100%', md: '10%'
                    }}>
                        <Center>
                            <Stack space={2} alignItems="center" justifyContent='space-between'>

                                <HStack space={2} alignItems="center" justifyContent='center'>
                                    <Center h="70" rounded="md" justifyContent='space-between' marginTop='2' >
                                        <HStack space={2} >
                                            <VStack space={2} alignContent='center' marginRight='5' >
                                                <IconButton icon={<Icon as={<Entypo name="circle" size={12} color="#898B8D" />} size='xs' color='#898B8D' />} />
                                                <FontAwesome5 name="truck" size={24} color="#E87722" />
                                            </VStack>
                                            <VStack space={2}>
                                                <IconButton icon={<Icon as={<Entypo name="circle" size={12} color="black" />} size='xs' color='#898B8D' />} />
                                                <Icon as={<MaterialCommunityIcons name="car-pickup" size={24} />} color='#E87722' />
                                            </VStack>

                                        </HStack>


                                    </Center>


                                    <Center h='70' w='230' bg="#ffffff" rounded="md" shadow={3} padding='2' justifyContent='space-between'>
                                        <HStack space={3} >
                                            <VStack space={2} alignContent='center' >
                                                <IconButton icon={<Icon as={<Entypo name="circle" size={12} color="black" />} alignSelf='center' size='xs' color='#898B8D' />} />
                                                <Text fontFamily='Roboto' fontSize='16' alignSelf='center'>Hoy</Text>
                                            </VStack>
                                            <VStack space={2} marginLeft='3'>
                                                <IconButton icon={<Icon as={<Entypo name="circle" size={12} color="black" />} alignSelf='center' size='xs' color='#898B8D' />} />
                                                <Text fontFamily='Roboto' fontSize='16' alignSelf='center'>3 dias</Text>
                                            </VStack>
                                            <VStack space={2} marginLeft='3'>
                                                <IconButton icon={<Icon as={<Entypo name="circle" size={12} color="black" />} alignSelf='center' size='xs' color='#898B8D' />} />
                                                <Text fontFamily='Roboto' fontSize='16' alignSelf='center'>5 dias</Text>
                                            </VStack>


                                        </HStack>
                                    </Center>

                                </HStack>
                                <Center>
                                    <HStack space={3}>
                                        <HStack><Text alignSelf='flex-start' fontSize='16' fontFamily='Roboto' color='#2B2B2B' >Ordenar por    </Text></HStack>
                                        <HStack><Button title='Fecha' backgroundColor='#E87722' width='100' h='7' size="lg" mb="1"><Text>Fecha</Text></Button></HStack>
                                        <HStack><Button title='Fecha' backgroundColor='#ffffff' width='100' h='7' size="lg" mb="1"><Text>Pagos</Text></Button></HStack>
                                    </HStack>
                                </Center>

                            </Stack>

                        </Center>
                        <Center >
                            <Box
                                marginTop='5'
                                marginBottom='3'
                                rounded="lg"
                                overflow="hidden"
                                width="85%"
                                shadow={1}
                                _light={{ backgroundColor: 'gray.50' }}
                                _dark={{ backgroundColor: 'gray.700' }}
                            >
                                <Box
                                    backgroundColor="#E9E9E9"
                                >


                                    <Box backgroundColor="#FFF" borderRadius='10'>
                                        <Stack>
                                            <VStack space={2} padding='0'>
                                                <VStack alignItems='flex-start'>
                                                    <HStack space={5} flexDirection='column' p='2'>
                                                        <HStack >
                                                            <Icon as={<Ionicons name="navigate-circle" size={24} color="black" />} color='#4B981F' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text>Trelew</Text>
                                                        </HStack>
                                                        <HStack >
                                                            <Icon as={<MaterialIcons name="location-pin" size={24} color="black" />} color='#B90000' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text fontWeight='bold' fontSize='24' fontFamily='Roboto'>Buenos Aires</Text>
                                                        </HStack>
                                                        <HStack alignItems='center'>
                                                            <FontAwesome5 name="money-bill-alt" size={14} color="#686868" alignSelf='center' marginRight='3' />
                                                            <Text fontSize='16' color='#2B2B2B' fontFamily='Roboto' alignSelf='center' marginLeft='2'> $18.157.00</Text>
                                                        </HStack>
                                                        <HStack  >
                                                            <Icon as={<Ionicons name="calendar-sharp" size={24} color="black" />} color='#686868' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text color='#2B2B2B' fontSize='16' fontFamily='Roboto'>5 de Agosto</Text>
                                                        </HStack>
                                                        <HStack marginTop='3'>
                                                            <FontAwesome5 name="truck" size={14} color="#686868" alignSelf='center' />
                                                            <VStack padding="1">
                                                                <HStack><Box>
                                                                    <Button backgroundColor='#4C9A20' width='136' h='8' size="lg" mb="1" marginLeft="52%"><Text fontFamily='Roboto' color='#ffffff' fontSize='20' textAlign='center' >Postularme</Text></Button>
                                                                </Box></HStack>
                                                            </VStack>
                                                        </HStack>
                                                    </HStack>
                                                </VStack>

                                            </VStack>

                                        </Stack>
                                    </Box>
                                    <HStack space="2" padding="2">
                                        <HStack space="4" alignItems='center'>
                                            <Text fontFamily='Roboto' color='#242424' fontSize='22' textAlign='center'>Cupo <Text fontFamily='Roboto' fontSize='20' textAlign='center' color="#242424" fontWeight="bold">18 de 22</Text></Text>
                                        </HStack>
                                        <HStack alignSelf='center' marginLeft='3'><Box w={{ base: '70%' }}><Progress backgroundColor="#ffffff" colorScheme='red' value={progress1} /></Box></HStack>
                                    </HStack>


                                </Box>
                            </Box>
                            <Box
                                marginTop='5'
                                marginBottom='3'
                                rounded="lg"
                                overflow="hidden"
                                width="85%"
                                shadow={1}
                                _light={{ backgroundColor: 'gray.50' }}
                                _dark={{ backgroundColor: 'gray.700' }}
                            >
                                <Box
                                    backgroundColor="#E9E9E9"
                                >


                                    <Box backgroundColor="#FFF" borderRadius='10'>
                                        <Stack>
                                            <VStack space={2} padding='0'>
                                                <VStack alignItems='flex-start'>
                                                    <HStack space={5} flexDirection='column' p='2'>
                                                        <HStack >
                                                            <Icon as={<Ionicons name="navigate-circle" size={24} color="black" />} color='#4B981F' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text>Trelew</Text>
                                                        </HStack>
                                                        <HStack >
                                                            <Icon as={<MaterialIcons name="location-pin" size={24} color="black" />} color='#B90000' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text fontWeight='bold' fontSize='24' fontFamily='Roboto'>San Miguel de Tucumán</Text>
                                                        </HStack>
                                                        <HStack alignItems='center'>
                                                            <FontAwesome5 name="money-bill-alt" size={14} color="#686868" alignSelf='center' marginRight='3' />
                                                            <Text fontSize='16' color='#2B2B2B' fontFamily='Roboto' alignSelf='center' marginLeft='2'> $18.157.00</Text>
                                                        </HStack>
                                                        <HStack  >
                                                            <Icon as={<Ionicons name="calendar-sharp" size={24} color="black" />} color='#686868' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text color='#2B2B2B' fontSize='16' fontFamily='Roboto'>5 de Agosto</Text>
                                                        </HStack>
                                                        <HStack marginTop='3'>
                                                            <FontAwesome5 name="truck" size={14} color="#686868" alignSelf='center' />
                                                            <HStack marginLeft='3'>
                                                                <MaterialCommunityIcons name="car-pickup" size={20} color='#686868' alignSelf='center' />
                                                            </HStack >
                                                            <VStack padding="1">
                                                                <HStack><Box><Button backgroundColor='#4C9A20' width='136' h='8' size="lg" mb="1" marginLeft="45%"><Text fontFamily='Roboto' color='#ffffff' fontSize='20' textAlign='center' >Postularme</Text></Button></Box></HStack>
                                                            </VStack>
                                                        </HStack>
                                                    </HStack>
                                                </VStack>

                                            </VStack>

                                        </Stack>
                                    </Box>
                                    <HStack space="2" padding="2">
                                        <HStack space="4" alignItems='center'>
                                            <Text fontFamily='Roboto' color='#242424' fontSize='22' textAlign='center'>Cupo <Text fontFamily='Roboto' fontSize='20' textAlign='center' color="#242424" fontWeight="bold">2 de 10</Text></Text>
                                        </HStack>
                                        <HStack alignSelf='center' paddingLeft='5'><Box w={{ base: '72%' }}><Progress backgroundColor="#ffffff" colorScheme='green' value={progress2} /></Box></HStack>
                                    </HStack>


                                </Box>
                            </Box>
                            <Box
                                marginTop='5'
                                marginBottom='3'
                                rounded="lg"
                                overflow="hidden"
                                width="85%"
                                shadow={1}
                                _light={{ backgroundColor: 'gray.50' }}
                                _dark={{ backgroundColor: 'gray.700' }}
                            >
                                <Box
                                    backgroundColor="#E9E9E9"
                                >


                                    <Box backgroundColor="#FFF" borderRadius='10'>
                                        <Stack>
                                            <VStack space={2} padding='0'>
                                                <VStack alignItems='flex-start'>
                                                    <HStack space={5} flexDirection='column' p='2'>
                                                        <HStack >
                                                            <Icon as={<Ionicons name="navigate-circle" size={24} color="black" />} color='#4B981F' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text>Trelew</Text>
                                                        </HStack>
                                                        <HStack >
                                                            <Icon as={<MaterialIcons name="location-pin" size={24} color="black" />} color='#B90000' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text fontWeight='bold' fontSize='24' fontFamily='Roboto'>San Miguel de Tucumán</Text>
                                                        </HStack>
                                                        <HStack alignItems='center'>
                                                            <FontAwesome5 name="money-bill-alt" size={14} color="#686868" alignSelf='center' marginRight='3' />
                                                            <Text fontSize='16' color='#2B2B2B' fontFamily='Roboto' alignSelf='center' marginLeft='2'> $18.157.00</Text>
                                                        </HStack>
                                                        <HStack  >
                                                            <Icon as={<Ionicons name="calendar-sharp" size={24} color="black" />} color='#686868' size='xs' alignSelf='center' marginRight="3" />
                                                            <Text color='#2B2B2B' fontSize='16' fontFamily='Roboto'>5 de Agosto</Text>
                                                        </HStack>
                                                        <HStack marginTop='3'>
                                                            <MaterialCommunityIcons name="car-pickup" size={20} color='#686868' alignSelf='center' />
                                                            <VStack padding="1">
                                                                <HStack><Box><Button backgroundColor='#4C9A20' width='136' h='8' size="lg" mb="1" marginLeft="52%"><Text fontFamily='Roboto' color='#ffffff' fontSize='20' textAlign='center' >Postularme</Text></Button></Box></HStack>
                                                            </VStack>
                                                        </HStack>
                                                    </HStack>
                                                </VStack>

                                            </VStack>

                                        </Stack>
                                    </Box>
                                    <HStack space="2" padding="2">
                                        <HStack space="4" alignItems='center'>
                                            <Text fontFamily='Roboto' color='#242424' fontSize='22' textAlign='center'>Cupo <Text fontFamily='Roboto' fontSize='20' textAlign='center' color="#242424" fontWeight="bold">5 de 10</Text></Text>
                                        </HStack>
                                        <HStack alignSelf='center' paddingLeft='5'><Box w={{ base: '72%' }}><Progress backgroundColor="#ffffff" colorScheme='yellow' value={progress3} /></Box></HStack>
                                    </HStack>


                                </Box>
                            </Box>
                        </Center>

                    </Box>
                </ScrollView>

            </Box>

        </NativeBaseProvider>
    );
}
const styles1 = StyleSheet.create({
    redcircle: {
        width: 15,
        height: 15,
        borderRadius: 12,
        backgroundColor: "red",
        position: "absolute",
        left: 14,
        justifyContent: "center",
        alignItems: "center",
    },
});