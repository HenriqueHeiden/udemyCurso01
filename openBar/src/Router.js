import { createAppContainer, createStackNavigator } from 'react-navigation';


import LoginScreen from './page/LoginScreen';
import SeriesPage from './page/SeriesPage';
import SerieDetailPage from './page/SerieDetailPage';
import SerieFormPage from './page/SerieFormPage';

const AppNavigator = createStackNavigator({


  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem Vindo !',
    }
  },
  'Main': {
    screen: SeriesPage
  },
  'SerieFormPage': {
    screen: SerieFormPage,
    navigationOptions: {
      title: 'Bem Vindo !',
    }
  },
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return {
        title: serie.title
      }
    }
  },
}, {
    defaultNavigationOptions: {
      title: 'Series !',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      }

    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;