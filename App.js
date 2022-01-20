import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import _tabNavigation from './Navigation/_tabNavigation.js';

const App = () => {
  return (
    <NavigationContainer>
      <_tabNavigation />
    </NavigationContainer>
  );
};

export default App;
