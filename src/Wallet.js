import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextInput, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeCard from '../components/HomeCard';

const WalletInfo = ({name, address, balance, change, color}) => {
  return (
    <View style={styles.walletInfo}>
      <View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#F0F0F0',
            marginRight:7
          }}>
          Wallet 1
        </Text>
        <Icon name="edit" type="ionicons" size={18} color={'#11d9b2'} />
        </View>
        <Text style={{color: 'gray'}}>0x12345...5688</Text>
      </View>
      <View style={{alignItems:"flex-end"}}>
        <Text style={{color: '#F0F0F0', fontSize: 18, fontWeight: '500'}}>
          $13,767.87
        </Text>
        <Text style={{color: color}}>+0.15% ($512.77)</Text>
      </View>
    </View>
  );
};

function Wallet () {
  return (
    <View style={styles.container}>
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
      <ScrollView style={{flex:1,width:'100%',paddingBottom:70}} showsVerticalScrollIndicator={false}>
      <View style={{width:'100%'}}>
      <PortfolioCard
          heading="Portfolio"
          text2="All Wallets"
          amount="$92,311.95"
          lastText="+0.15% ($312.98)"

        />
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonActive}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Wallet</Text>
        </TouchableOpacity>
      </View>
      <WalletInfo color={'#0a7a64'} />
      <WalletInfo color={'#963838'} />
      <WalletInfo color={'#0a7a64'} />
      <WalletInfo color={'#0a7a64'} />
      <WalletInfo color={'#963838'} />
      <WalletInfo color={'#0a7a64'} />
      <WalletInfo color={'#0a7a64'} />
</ScrollView>
    </View>
  );
};

// portfolio card
const PortfolioCard = ({heading,text2,amount,lastText}) => {
  return (
    <View
      style={{
        width: '90%',
        marginRight:10,
        height:130,
        borderWidth: 1,
        borderColor: '#303030',
        backgroundColor: 'rgba(105, 105, 105, 0.2)',
        marginTop: 20,
        borderRadius:10,
        padding:10,
        marginLeft:10,
        flex:1,
        elevation:2
      }}>
      <Text style={{fontSize: 20, color: '#fff',fontWeight:'600'}}>{heading}</Text>
      <Text style={{color: '#fff',fontSize:13}}>{text2}</Text>

      <Text style={{color: '#fff',marginTop:15,fontSize:25,fontWeight:'bold'}}>{amount}</Text>
      <Text style={{color: "#11d9b2",fontSize:11,marginTop:3}}>{lastText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingVertical: 20,
  },
  leftContainer: {

  },
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
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  portfolioMain: {
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: 'rgba(105, 105, 105, 0.2)',
    width: '95%',
    height: 140,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: 'relative',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  button: {
    backgroundColor: '#202329',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonActive: {
    backgroundColor: '#11d9b2',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "600",
  },
  walletInfo: {
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: 'rgba(105, 105, 105, 0.2)',
    width: '95%',
    height: 90,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Wallet;