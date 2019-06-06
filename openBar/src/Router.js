import{createAppContainer, createStackNavigator} from 'react-navigation';


import LoginScreen from './page/LoginScreen';
import SeriesPage from './page/SeriesPage';

const AppNavigator = createStackNavigator({
 

  'Main':{
    screen: SeriesPage
  },
  'Login':{
    screen: LoginScreen,
    navigationOptions:{
      title:'Bem Vindo !',      
    }
  },

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