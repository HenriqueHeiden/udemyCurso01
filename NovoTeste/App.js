import { createAppContainer, createStackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail':{
    screen: PeopleDetailPage
  }
}, {
    defaultNavigationOptions: {
      title: 'Contato',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,

        flexGrow: 1,
        textAlign: 'center',

      }
    }
  });

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;

