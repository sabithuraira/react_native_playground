/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

export default class SampleMenu extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Music',
        'Movie',
        'Sport',
        'Entertainment',
      ])
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
            }}>
              <View style={styles.row}>
                <Text style={styles.row_style}>{rowData}</Text>
              </View>
            </TouchableHighlight>
          )}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator_style} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
