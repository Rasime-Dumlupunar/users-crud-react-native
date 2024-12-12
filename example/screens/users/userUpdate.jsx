import React from 'react';
import {View, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';
import {newUserSchema} from '../../utils/validation';
import {Input} from '../../components/UI/input';
import Button from '../../components/UI/button';
import {useDispatch} from 'react-redux';
import {USERS} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {updateUser} from '../../store/slice/userSlice';

// create a component
const Userupdate = ({route}) => {
  const user = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleUpdate = () => {
    if (user) {
      dispatch(updateUser(user.id));
      navigation.navigate(USERS);
    } else {
      Alert.alert('Kullanıcı bilgileri eksik!');
    }
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: user?.id || Date.now(),
          name: user?.name || '',
          surname: user?.surname || '',
          phoneNumber: user?.phoneNumber || '',
          email: user?.email || '',
          gender: user?.gender || '',
          age: user?.age || '',
        }}
        validationSchema={newUserSchema}
        onSubmit={values => {
          dispatch(updateUser(values.id, values));
          navigation.navigate(USERS);
        }}>
        {({handleChange, handleBlur, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              placeholder="Please set name"
            />
            <Input
              error={errors.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              title="Surname"
              placeholder="Please set Surname"
            />
            <Input
              error={errors.email}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="Email"
              placeholder="Please set email"
              key="e-mail"
            />
            <Input
              error={errors.phoneNumber}
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone number"
              placeholder="Please set phone number"
              key="phone-Number"
            />
            <Input
              error={errors.gender}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              title="Gender"
              placeholder="Please set gender"
            />
            <Input
              error={errors.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              title="Age"
              placeholder="Please set age"
            />
            <Button onPress={handleUpdate} title="Update" status="warning" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default Userupdate;
