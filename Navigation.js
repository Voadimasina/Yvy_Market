import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/Home'
// import Search from './screens/SearchScreen'
// import User from './screens/UserScreen'
// import Cart from './screens/CartScreen'
import ArticleDetail from './screens/ArticleDetailsScreen'
// import Categories from './screens/CategoriesScreen'

const Navigation = () => {
  const Stack = createStackNavigator()

  const screenOptions = {
    headerShown: false
  }
  // Landonique
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Article_Details" component={ArticleDetail} />
        {/* <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="User" component={User} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation