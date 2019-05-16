import{createAppContainer, createStackNavigator} from 'react-navigation';

import LoginScreen from './src/page/LoginScreen';
import SeriesPage from './src/pages/SeriesPage';

const AppNavigator = createStackNavigator({
  'Login':{
    screen: LoginScreen,
    navigationOptions:{
      title:'Bem Vindo !',      
    }
  },
  'Main':{
    screen: SeriesPage
  }
},{
  defaultNavigationOptions:{
    title: 'Series !',
    headerTintColor:'white',    
    headerStyle:{
        backgroundColor:'#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor:'#C5C5C5'
    },
    headerTitleStyle:{
      color:'white',
      fontSize:30,
    }
    
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;