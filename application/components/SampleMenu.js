/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

  const data_array=['Music',
              'Movie',
              'Sport',
              'Entertainment',];

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class SampleMenu extends Component {
  constructor(props) {
    super(props);
    //definition of listview datasource
    this.state = {
      dataSource: ds.cloneWithRows(data_array),
      filter_string:'',
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22,marginTop:45}}>
        <ListView style={styles.listview_style}
          dataSource={this.state.dataSource}
          renderRow={(rowData,sectionId,rowId) =>(
            <TouchableHighlight onPress={() => {
                this.props.navigator.push({name:'dummypage'});
                /*
                Alert.alert(
                  'Enter title here..',
                  'You click on '+rowData,
                );
                */
            }}>
              <View style={styles.row}>
                <Text style={styles.row_style}>{rowData}</Text>
              </View>
            </TouchableHighlight>
          )}
          enableEmptySections={true}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator_style} />}
          renderHeader={() =>
            <View style={styles.listview_header}>
              <TextInput style={styles.input} placeholder="Search..."
                onChangeText={(text) =>{
                  var rows = [];

                  for (var i=0; i < data_array.length; i++) {
                     var stateName = data_array[i].toLowerCase();
                     if(stateName.search(text.toLowerCase()) !== -1){
                       rows.push(data_array[i]);
                     }
                   }

                   this.setState({dataSource:ds.cloneWithRows(rows)});
                }}
              />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listview_header: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  listview_style: {
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  row_style: {
    flex: 1,
    fontSize: 15,
    textAlign: 'left',
    margin: 10,
  },
  separator_style: {
   flex: 1,
   height: StyleSheet.hairlineWidth,
   backgroundColor: '#8E8E8E',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});
