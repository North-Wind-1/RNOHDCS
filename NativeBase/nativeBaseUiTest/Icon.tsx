import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {
  Box,
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  VStack,
  Center,
  HStack,
  Icon,
  createIcon,
} from 'native-base';
import {Circle} from '@react-native-oh-tpl/react-native-svg';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
 
export function IconTest() {
  const icons = [
    {
      icon: <AddIcon />,
      iconName: 'add',
    },
    {
      icon: <ArrowBackIcon />,
      iconName: 'arrow-back',
    },
    {
      icon: <ArrowForwardIcon />,
      iconName: 'arrow-forward',
    },
    {
      icon: <ArrowUpIcon />,
      iconName: 'arrow-up',
    },
  ];
  const CustomIcon = createIcon({
    viewBox: '0 0 36 36',
    // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    path: [
      <Circle cx="18" cy="18" r="17.5" fill="#06B6D4" stroke="#0E7490" />,
      <Circle cx="18" cy="18" r="13.5" fill="white" stroke="#0E7490" />,
      <Circle cx="18" cy="18" r="9.5" fill="#06B6D4" stroke="#0E7490" />,
      <Circle cx="18" cy="18" r="5.5" fill="white" stroke="#0E7490" />,
    ],
  });
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="children">
            <TestCase itShould="children" tags={['dev']}>
              <Icon>
                <Text>this is icon children</Text>
              </Icon>
            </TestCase>
          </TestSuite>
          <TestSuite name="children">
            <TestCase itShould="add" tags={['dev']}>
              <Center>
                <HStack space={3}>
                  <Icon
                    name="add"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={Entypo}
                    name="app-store"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={Entypo}
                    name="app-store"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={MaterialCommunityIcons}
                    name="web"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                </HStack>
              </Center>
            </TestCase>
          </TestSuite>
          <TestSuite name="as">
            <TestCase itShould="as" tags={['dev']}>
              <Center>
                <HStack space={3}>
                  <Icon
                    as={AntDesign}
                    name="android1"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={Entypo}
                    name="app-store"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                  <Icon
                    as={MaterialCommunityIcons}
                    name="web"
                    color="coolGray.800"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                  />
                </HStack>
              </Center>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <HStack space={4}>
                <AddIcon size={12}></AddIcon>
                <AddIcon size={20}></AddIcon>
                <AddIcon size={40}></AddIcon>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="createIcon">
            <TestCase itShould="createIcon" tags={['dev']}>
              <CustomIcon size={12} />
            </TestCase>
          </TestSuite>
          <TestSuite name="color">
            <TestCase itShould="color" tags={['dev']}>
              <HStack space={3}>
                <AddIcon color="red.500" size={20} name="AddIcon"></AddIcon>
                <ArrowBackIcon
                  color="blue.500"
                  size={20}
                  name="ArrowBackIcon"></ArrowBackIcon>
                <ArrowForwardIcon
                  color="green.500"
                  size={20}
                  name="ArrowForwardIcon"></ArrowForwardIcon>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="name">
            <TestCase itShould="name" tags={['dev']}>
              <HStack space={3}>
                <AddIcon size={20} name="AddIcon"></AddIcon>
                <ArrowBackIcon size={20} name="ArrowBackIcon"></ArrowBackIcon>
                <ArrowForwardIcon
                  size={20}
                  name="ArrowForwardIcon"></ArrowForwardIcon>
              </HStack>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  box: {
    height: 100,
    width: 200,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});