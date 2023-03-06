import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import COLORS from '../../../theme/colors';
import BottomMenu from '../../../components/BottomModal';
import TextInput from '../../../components/TextInput';
import {normalize} from '../../../utils/reponsive';
import CheckBox from '../../../components/Checkbox';
import Row from '../../../components/Row';
const LoginScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');

  const onPressModalSelect = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const renderInput = useCallback(() => {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Đăng nhập</Text>
        <View style={[styles.container, {paddingHorizontal: normalize(15)}]}>
          <TextInput
            label="Tài khoản"
            placeholder="Nhập tài khoản"
            rightIcon={{type: 'octicons', name: 'home', size: 20}}
            leftIcon={{type: 'octicons', name: 'home', size: 20}}
            size={16}
            value={userName}
            onChangeText={(text: string) => {
              setUserName(text);
            }}
          />
          <View style={{marginVertical: normalize(10)}} />
          <TextInput
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            leftIcon={{type: 'octicons', name: 'home', size: 20}}
            size={16}
            secureTextEntry={true}
            value={passWord}
            onChangeText={(text: string) => {
              setPassWord(text);
            }}
          />
          <Row around containtStyle={styles.row}>
            <CheckBox
              resize={0.8}
              status={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text style={styles.savePassText}>Lưu đăng nhập</Text>
          </Row>
        </View>
        <Button
          containerStyle={[styles.container, styles.button]}
          title="Đăng nhập"
          onPress={() => onPressModalSelect()}
          primary
          textStyle={{color: `${COLORS.blu26225b}`}}
        />
      </View>
    );
  }, [isChecked, onPressModalSelect, passWord, userName]);
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.imageBackground} />
      <Button
        containerStyle={styles.button}
        title="Đăng nhập"
        onPress={() => onPressModalSelect()}
        primary
        textStyle={{color: `${COLORS.blu26225b}`}}
      />
      <BottomMenu isVisible={isVisible} chidren={renderInput()} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    color: COLORS.blu26225b,
    fontSize: 25,
    marginVertical: normalize(20),
    fontWeight: '700',
  },
  button: {
    paddingHorizontal: normalize(15),
  },
  savePassText: {
    color: COLORS.blu26225b,
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: normalize(8),
  },
  row: {
    justifyContent: 'flex-end',
    marginVertical: normalize(10),
  },
});
