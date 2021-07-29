/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
// import { QueryClient, QueryClientProvider } from 'react-query'
import ProductCategoryDetails from './views/ProductCategoryDetails'

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ProductCategoryDetails />
    </SafeAreaView>

  );
};

export default App
