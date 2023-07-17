import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
      <StatusBar />
      <View style={styles.upperView}>
        <Image
          source={require('../../assets/loginImage.jpg')}
          style={styles.logoStyle}
          resizeMode="contain"
        />
      </View>

      <View style={styles.middleView}>
        <Text style={styles.heading1}>Email Address</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Email"
          placeholderTextColor="grey"
          // onChangeText={handleChange('password')}
          // value={values.password}
        />
        <Text style={[styles.heading2]}>Password</Text>
        <TextInput
          style={styles.textinput1}
          placeholder="Input your password account"
          placeholderTextColor="grey"
          // onChangeText={handleChange('password')}
          // value={values.password}
        />
        <View style={styles.checkbox}>
          <View style={styles.checkbox1}>
            <CheckBox
              value={true}
              // onValueChange={}
              // tintColors={{true: 'blue', false: 'grey'}}
            />
            <Text style={styles.rememberme}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotpass}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lowerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.loginButton}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <View style={styles.dontaccount}>
          <Text style={styles.dontaccount1}>Don’t have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.createacc}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {flex: 1},
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  createacc: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Manrope-Bold',
  },
  login: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
    color: '#FFFFFF',
  },
  checkbox1: {flexDirection: 'row', alignItems: 'center'},
  rememberme: {
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Manrope-Medium',
  },
  dontaccount: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  dontaccount1: {
    color: 'grey',
    fontSize: 19,
    marginHorizontal: 5,
    fontFamily: 'Manrope-Medium',
  },
  forgotpass: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'Manrope-Medium',
  },
  upperView: {
    backgroundColor: 'white',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: '200%',
    width: '100%',
  },
  middleView: {
    backgroundColor: 'white',
    height: 320,
    width: '85%',
    // elevation: 1,
    alignSelf: 'center',
    marginTop: -25,
    borderRadius: 10,
    padding: 25,
  },
  heading1: {
    fontFamily: 'Manrope-Medium',
    color: 'black',
    fontSize: 18,
  },
  heading2: {
    fontFamily: 'Manrope-Medium',
    color: 'darkgray',
    fontSize: 18,
  },
  textinput1: {
    color: 'black',
    width: '100%',
    marginVertical: 10,
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    alignSelf: 'center',
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
  },
  lowerView: {
    marginTop: 60,
  },
  loginButton: {
    backgroundColor: 'rgb(41,90,236)',
    padding: 20,
    alignSelf: 'center',
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
  },
  newUserText: {
    marginTop: 5,
    color: 'black',
    fontSize: 18,
  },
  createAccountText: {
    marginTop: 5,
    color: '#0A4D68',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputBox: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: 'grey',
  },
  otpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  sendOtpBtn: {
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
  },
  emailButton: {
    borderColor: '#0A4D68',
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailButtonText: {
    color: '#0A4D68',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  helpText: {
    marginTop: 20,
    color: '#0A4D68',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dividerLine: {
    borderWidth: 1,
    width: '45%',
    borderColor: 'grey',
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
});
