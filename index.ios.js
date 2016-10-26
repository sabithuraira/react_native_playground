import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, Text,
  View, TouchableHighlight}
  from 'react-native';

import WelcomePage from './application/components/WelcomePage';
import ListMenu from './application/components/ListMenu';

class myfirstApp extends Component {
  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'root') {
      route.title='Welcome';
      route.index=0;
      return <WelcomePage navigator={navigator} />
    }
    if(route.name == 'listmenu') {
      route.title='Main Menu';
      route.index=1;
      return <ListMenu navigator={navigator} />
    }
  }

  render() {
    return (
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}


          navigationBar={
           <Navigator.NavigationBar
              style={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}
             routeMapper={{
               LeftButton: (route, navigator, index, navState) =>
              {
                if (route.index === 0) {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text style={styles.navbar}>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
               RightButton: (route, navigator, index, navState) =>
                 { return (<Text></Text>); },
               Title: (route, navigator, index, navState) =>
               {
                 return (
                     <Text style={styles.titlebar}>{route.title}</Text>
                 );
               },
             }}

            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.FloatFromBottom}
           />
        }

        />
      /*
      <Navigator
          style={{flex:1}}
          initialRoute={{name: 'Welcome', component: WelcomePage, index: 0}}
          renderScene={(route, navigator) =>    {
            if (route.component){
              return React.createElement(route.component, {navigator,route});
            }
                }}
          navigationBar={
            <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
      } />
      */

      /*
      <Navigator
        initialRoute={{ title: 'Welcome',component:WelcomePage, index: 0 }}
        renderScene={(route, navigator) =>{
          if (route.component){
            return React.createElement(route.component, {navigator,route});
          }
        }}
        navigationBar={
         <Navigator.NavigationBar
            style={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
            {
              if (route.index === 0) {
                return null;
              } else {
                return (
                  <TouchableHighlight onPress={() => navigator.pop()}>
                    <Text style={styles.navbar}>Back</Text>
                  </TouchableHighlight>
                );
              }
            },
             RightButton: (route, navigator, index, navState) =>
               { return (<Text></Text>); },
             Title: (route, navigator, index, navState) =>
             {
               return (
                   <Text style={styles.titlebar}>{route.title}</Text>
               );
             },
           }}

          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FloatFromBottom}
         />
      }
      />
      */
      /*
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <WelcomePage
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            onListMenu={ () => {
              navigator.push({
                component: ListMenu,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
      */
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titlebar: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navbar: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue',
  },
});

AppRegistry.registerComponent('myfirstApp', () => myfirstApp);
