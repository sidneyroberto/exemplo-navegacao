import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Screen1 from './pages/Screen1'
import Screen2 from './pages/Screen2'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{title: 'Exemplo Navegação'}} />
        <Stack.Screen 
          name='Screen1'
          component={Screen1}
          options={{title: 'Tela 1'}} />
        <Stack.Screen 
          name='Screen2'
          component={Screen2}
          options={{title: 'Tela 2'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App