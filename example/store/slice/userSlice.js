import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
      Alert.alert('Kullanıcı eklendi!');
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      Alert.alert('Kullanıcı silindi!');
    },
    updateUser: (state, action) => {
      state.users = state.users.map(user =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
  },
});

export const {addNewUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
