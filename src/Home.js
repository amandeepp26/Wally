//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeCard from '../components/HomeCard';

// create a component
const Home = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <View style={styles.userIcon}>
            {/* <FontAwesome name="user" size={24} color="#fff" /> */}
            <Icon name="person" type="ionicons" size={25} color={'gray'} />
          </View>
        </View>
        <View style={styles.centerContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search currencies and more "
            placeholderTextColor="#666666"
          />
        </View>
        {/* <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View> */}
      </View>
      <ScrollView style={{paddingBottom:70}} showsVerticalScrollIndicator={false}>
        {/* Portfolio card scrolling horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <HomeCard
          heading="Portfolio"
          text2="All Wallets"
          amount="$92,311.95"
          lastText="+0.15% ($312.98)"
        />
        <HomeCard
          heading="Wallet 1"
          text2="0*00000.0001"
          amount="$14,099.95"
          lastText="+2.15% ($312.98)"
        />
        </ScrollView>
        {/* Middle small cards */}
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 30,
          width: '100%',
        }}>
        <View style={styles.midCard}>
          <Icon
            name="analytics-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            Wallet Tracker
          </Text>
        </View>

        <View style={styles.midCard}>
          <Icon
            name="home-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            Iceberg Orders
          </Text>
        </View>
        <View style={styles.midCard}>
          <Icon
            name="copy-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            Copy Trade
          </Text>
        </View>
        <View style={styles.midCard}>
          <Icon
            name="earth-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            Moontipilers
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 10,
          width: '100%',
        }}>
        <View style={styles.midCard}>
          <Icon
            name="people-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            OTC Traders
          </Text>
        </View>

        <View style={styles.midCard}>
          <Icon
            name="stats-chart-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            AI Trading Bot
          </Text>
        </View>
        <View style={styles.midCard}>
          <Icon
            name="alert-circle-outline"
            type="ionicon"
            color={'#11d9b2'}
            size={20}
          />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            Alerts
          </Text>
        </View>
        <View style={styles.midCard}>
          <Icon name="earth-outline" type="ionicon" color={'grey'} size={20} />
          <Text style={{color: '#fff', fontSize: 11, marginTop: 5}}>
            Moontipilers
          </Text>
        </View>
      </View>
      {/* Bottom Card */}
      <View
        style={{
          marginTop: 20,
          width: '95%',
          alignSelf: 'center',
          borderWidth: 1,
          backgroundColor: 'rgba(105, 105, 105, 0.2)',
          paddingTop: 20,
          borderRadius: 10,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View
            style={{
              backgroundColor: 'rgba(105, 105, 105, 0.2)',
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>
              HOT
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(105, 105, 105, 0.2)',
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>GAINERS</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(105, 105, 105, 0.2)',
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>LOSERS</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(105, 105, 105, 0.2)',
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>YOURS</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(105, 105, 105, 0.2)',
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>NEW</Text>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#202020',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circleIcon, {backgroundColor: 'orange'}]}>
              <Icon
                name="logo-bitcoin"
                type="ionicon"
                color={'#fff'}
                size={20}
              />
            </View>
            <Text style={{color: '#fff', marginLeft: 10}}>Bitcoin</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#F0F0F0', fontSize: 16, fontWeight: 500}}>
                $13,767.87
              </Text>
              <Text style={{color: '#11d9b2'}}>+2.40%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#202020',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circleIcon, {backgroundColor: 'blue'}]}>
              <Icon
                name="git-merge-outline"
                type="ionicon"
                color={'#fff'}
                size={20}
              />
            </View>
            <Text style={{color: '#fff', marginLeft: 10}}>Litecoin</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#F0F0F0', fontSize: 16, fontWeight: 500}}>
                $13,767.87
              </Text>
              <Text style={{color: '#11d9b2'}}>+2.40%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#202020',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circleIcon, {backgroundColor: 'white'}]}>
              <Icon
                name="logo-deviantart"
                type="ionicon"
                color={'#000'}
                size={20}
              />
            </View>
            <Text style={{color: '#fff', marginLeft: 10}}>XRP</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#F0F0F0', fontSize: 16, fontWeight: 500}}>
                $13,767.87
              </Text>
              <Text style={{color: '#11d9b2'}}>+2.40%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#202020',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circleIcon, {backgroundColor: 'blue'}]}>
              <Icon
                name="git-merge-outline"
                type="ionicon"
                color={'#fff'}
                size={20}
              />
            </View>
            <Text style={{color: '#fff', marginLeft: 10}}>Litecoin</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#F0F0F0', fontSize: 16, fontWeight: 500}}>
                $13,767.87
              </Text>
              <Text style={{color: '#11d9b2'}}>+2.40%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#202020',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circleIcon, {backgroundColor: 'white'}]}>
              <Icon
                name="logo-deviantart"
                type="ionicon"
                color={'#000'}
                size={20}
              />
            </View>
            <Text style={{color: '#fff', marginLeft: 10}}>XRP</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#F0F0F0', fontSize: 16, fontWeight: 500}}>
                $13,767.87
              </Text>
              <Text style={{color: '#11d9b2'}}>+2.40%</Text>
            </View>
          </View>
        </View>
        
      </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingVertical: 20,
    // backgroundColor: '#171717',
  },
  leftContainer: {},
  userIcon: {
    backgroundColor: '#202329',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#27292b',
    borderWidth: 2,
    color: '#fff',
    marginRight: 10,
  },

  centerContainer: {
    flex: 3,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#1c1d1f',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 4,
    fontSize: 13,
    borderColor: '#27292b',
    borderWidth: 2,
    color: '#fff',
  },
  midCard: {
    // paddingHorizontal: 5,
    height: 90,
    width: '22%',
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(105, 105, 105, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
  },
  circleIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Home;
