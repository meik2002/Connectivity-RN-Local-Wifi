import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import WifiManager from 'react-native-wifi-reborn';

export const connectToSsidWithPrefix = createAsyncThunk(
  'wifi/connectToSsidWithPrefix',
  async (prefix: string) => {
    return WifiManager.connectToSSIDPrefix(prefix);
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {},
});

export default counterSlice.reducer;
