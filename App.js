import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const services = [
    {
      Name: "Home",
      Link: "https://www.crea.com/",
      Icon: "home"
    },
    {
      Name: "Domains",
      Link: "",
      Icon: "globe"
    },
    {
      Name: "Hosting",
      Link: "",
      Icon: "mixcloud"
    },
    {
      Name: "Digital Marketing",
      Link: "",
      Icon: "bar-chart"
    },
    {
      Name: "Website Demo",
      Link: "",
      Icon: "hand-o-up"
    },
    {
      Name: "Affiliate",
      Link: "",
      Icon: "link"
    },
  ]
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <Image style={styles.imageStyle} source={require('./Images/1628209812650_1627657047381_2.png')} />

        <Pressable style={styles.loginBtn} onPress={() => { console.warn('Login Button Clicked') }}>
          <Text style={styles.abc}>Login</Text>
        </Pressable>

      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerSubTitle}>BUILD YOUR DREAM'S WITH</Text>
        <Text style={styles.headerTitle}>
          <Text style={styles.headerSpan}>UNIQUE IT </Text>
          CENTER
        </Text>
      </View>
      <View style={styles.serviceContainer}>
        {services.map((service, i) =>
          <Pressable style={styles.serviceItem} key={i} onPress={() => { console.warn('Service Link Clicked') }}>
            <Text>
              <Icon name={service.Icon} size={18} />
            </Text>
            <Text style={styles.serviceTextStyle}>{service.Name}</Text>
          </Pressable>
        )}
      </View>
      <Text style={{textAlign:'center', marginBottom:5, fontSize:15, fontWeight:'bold'}}>FOLLOW US ON</Text>
      <View style={styles.socialIcon}>
        <Icon name="facebook-square" size={40} color={'#1877f2'} onPress={() => Linking.openURL('https://www.facebook.com/')} style={{marginHorizontal:5}}/>
        <Icon name="google-plus-square" size={40} color={'#DB4437'} onPress={() => Linking.openURL('https://myaccount.google.com/')} style={{marginHorizontal:5}}/>
        <Icon name="twitter-square" size={40} color={'#00acee'} onPress={() => Linking.openURL('https://twitter.com/')}style={{marginHorizontal:5}}/>
        <Icon name= "linkedin-square" size={40} color={'#0077b5'} onPress={() => Linking.openURL('https://www.linkedin.com/')} style={{marginHorizontal:5}}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>©2021 UNIQUE IT CENTER - All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerSubTitle: {
    fontSize: 18,
    color: '#093f4b',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#093f4b',
  },
  headerSpan: {
    color: 'red',
  },

  imageStyle: {
    width: '60%',
    height: '100%'
  },
  navbar: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginBtn: {
    marginRight: 10,
    width: 70,
    height: 40,
    backgroundColor: '#300E4D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  serviceContainer: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  serviceItem: {
    margin: 5,
    width: 150,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE2E6',
    borderRadius: 10,
  },
  serviceTextStyle: {
    fontSize: 18,
    color: '#300E4D'
  },
  abc: {
    color: 'white'
  },
  socialIcon:{
    flex:0,
    flexWrap:'wrap',
    flexDirection:"row",
    marginBottom:40,
    justifyContent:'center',
    alignItems:'center',
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#300E4D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: 'white'
  },
});
