/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import Card from './src/Card';
import Typography from './src/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {LineChart, Grid} from 'react-native-svg-charts';

export default function App() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          {Platform.OS === 'android' ? (
            <IonicIcon name="arrow-back" size={35} color="#EDEDED" />
          ) : (
            <IonicIcon name="chevron-back" size={35} color="#EDEDED" />
          )}
          <Typography type="title">Tasks</Typography>
          <IonicIcon name="notifications-outline" size={35} color="#FFBE00" />
        </View>

        <View style={{alignItems: 'flex-end', margin: 10}}>
          <Typography type="title" mode="uppercase" color="yellow">
            CREATE +
          </Typography>
        </View>
        <View style={styles.tab}>
          <View style={styles.active}>
            <Typography type="title" color="yellow">
              All
            </Typography>
          </View>
          <Typography type="title">In Progress</Typography>
          <Typography type="title">Started</Typography>
          <Typography type="title">Completed</Typography>
        </View>
        <View>
          <View style={{marginHorizontal: 15, marginTop: 20}}>
            <Typography type="title">Upcoming Tasks 5</Typography>
          </View>
          <View style={styles.orders}>
            <Card>
              <View>
                <Typography type="subtitle">Order #890PO90</Typography>
                <Typography type="text" color="secondary">
                  Bryan Williams
                </Typography>
                <View style={styles.track}>
                  <Typography type="text" color="secondary">
                    Progress
                  </Typography>
                  <Typography type="text" color="secondary">
                    20%
                  </Typography>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.barPercent,
                      {backgroundColor: '#FFBE00', width: '20%'},
                    ]}
                  />
                </View>
                <View style={{marginTop: 5, alignItems: 'flex-end'}}>
                  <Typography type="text" color="secondary">
                    1 day left
                  </Typography>
                </View>
              </View>
            </Card>
            <Card>
              <View>
                <Typography type="subtitle">Order #890PO90</Typography>
                <Typography type="text" color="secondary">
                  Marcus Klaus
                </Typography>
                <View style={styles.track}>
                  <Typography type="text" color="secondary">
                    Progress
                  </Typography>
                  <Typography type="text" color="secondary">
                    20%
                  </Typography>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.barPercent,
                      {backgroundColor: '#FFBE00', width: '20%'},
                    ]}
                  />
                </View>
                <View style={{marginTop: 5, alignItems: 'flex-end'}}>
                  <Typography type="text" color="secondary">
                    1 day left
                  </Typography>
                </View>
              </View>
            </Card>
          </View>
        </View>
        <View>
          <View style={{marginHorizontal: 15, marginTop: 20}}>
            <Typography type="title">Statistics</Typography>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 'auto',
            }}>
            <Card>
              <View style={styles.vertical} />
              <View style={styles.horizontal} />
              <View style={styles.contentElements}>
                <View style={styles.section}>
                  <View style={{marginVertical: 5}}>
                    <View style={{flexDirection: 'row', paddingRight: 40}}>
                      <View style={styles.ionicIcon}>
                        <IonicIcon
                          name="grid-outline"
                          size={30}
                          color="#0364FF"
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <Typography type="title">50</Typography>
                        <Typography type="label" color="secondary">
                          Total projects
                        </Typography>
                      </View>
                    </View>
                  </View>
                  <View style={{marginVertical: 5}}>
                    <View style={{flexDirection: 'row', paddingRight: 30}}>
                      <View style={styles.icon}>
                        <Icon
                          name="checkbox-marked-circle-outline"
                          size={30}
                          color="#0EE881"
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <Typography type="title">15</Typography>
                        <Typography type="label" color="secondary">
                          Completed
                        </Typography>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.section}>
                  <View style={{marginVertical: 5}}>
                    <View style={{flexDirection: 'row', paddingRight: 40}}>
                      <View style={styles.icon}>
                        <Icon name="flash-outline" size={30} color="#FFBE00" />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <Typography type="title">10</Typography>
                        <Typography type="label" color="secondary">
                          In Progress
                        </Typography>
                      </View>
                    </View>
                  </View>
                  <View style={{marginVertical: 5}}>
                    <View style={{flexDirection: 'row', paddingRight: 40}}>
                      <View style={styles.icon}>
                        <Icon
                          name="clock-time-five-outline"
                          size={30}
                          color="#FF5252"
                        />
                      </View>
                      <View style={{flexDirection: 'column'}}>
                        <Typography type="title">2</Typography>
                        <Typography type="label" color="secondary">
                          Delayed
                        </Typography>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View style={{marginTop: 30, flexDirection: 'row', height: 'auto'}}>
            <Card>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Typography type="title">Day</Typography>
                <Typography type="title">Week</Typography>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderBottomColor: '#FFBE00',
                  }}>
                  <Typography type="title" color="yellow">
                    Month
                  </Typography>
                </View>
                <Typography type="title">Year</Typography>
              </View>
              <View>
                <View style={styles.currency}>
                  <Typography type="title">$</Typography>
                  <Typography type="headline">13,543</Typography>
                </View>
                <LineChart
                  style={{height: 200}}
                  data={data}
                  svg={{stroke: '#FFBE00'}}
                  contentInset={{top: 20, bottom: 20}}>
                  <Grid />
                </LineChart>
              </View>
              <View style={styles.months}>
                <Typography type="title" color="secondary">
                  Jun
                </Typography>
                <Typography type="title" color="secondary">
                  Jul
                </Typography>
                <Typography type="title" color="secondary">
                  Ago
                </Typography>
                <Typography type="title" color="secondary">
                  Sep
                </Typography>
                <Typography type="title">Oct</Typography>
                <Typography type="title" color="secondary">
                  Nov
                </Typography>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040B11',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFBE00',
  },
  orders: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currency: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  months: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {marginTop: 10, paddingRight: 15},
  ionicIcon: {marginTop: 10, paddingRight: 20},
  contentElements: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  vertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 180,
    right: 0,
    width: 1,
    backgroundColor: '#494C50',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  horizontal: {
    top: 65,
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    width: '100%',
    backgroundColor: '#494C50',
  },
  progressBar: {
    marginTop: 5,
    height: 8,
    width: '100%',
    backgroundColor: '#494C50',
    borderColor: '#494C50',
    borderWidth: 2,
    borderRadius: 5,
  },
  barPercent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
