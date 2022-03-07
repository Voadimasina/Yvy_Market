import { View, Text } from 'react-native'
import React from 'react'
import Head from './Head'
import CategoriesNav from './CategoriesNav'

const Header = () => {
  return (
    <>
      <Head />
      <CategoriesNav />
    </>
  )
}

export default Header