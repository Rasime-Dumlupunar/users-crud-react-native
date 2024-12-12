import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/function';
import themeColors from '../../theme/themeColors';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {USERDETAIL} from '../../utils/routes';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}>
      <View>
        <View
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getRandomColor(),
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>
          {compareName(user.name, user.surname)}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', paddingTop: 5}}>
          {user.email}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowRight size={25} color={themeColors.orange} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: themeColors.gray,
    margin: 5,
    shadowColor: themeColors.black,
    shadowOpacity: 0.2,
  },
});

export default UserCard;
