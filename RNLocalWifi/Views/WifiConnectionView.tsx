import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

import {connectToSsidWithPrefix, currentSsid} from '../Features/WifiSlice';
import {useAppDispatch, useAppSelector} from '../Store/Store';

function WifiConnectionView() {
  const dispatch = useAppDispatch();
  const [ssid, setSsid] = useState('');

  const connectToMlgSsid = (prefix: string) => {
    WifiManager.connectToSSIDPrefix(prefix)
      .then(() => checkSsid())
      .catch(e => {
        console.error('ConnectToSsidWithPrefix: ', JSON.stringify(e));
        setSsid(`Unable to connect to Ssid starting wiht ${prefix}`);
      });
  };

  const checkSsid = () => {
    console.log('check ssid');
    WifiManager.getCurrentWifiSSID()
      .then(result => {
        console.log(result);
        setSsid(result);
      })
      .catch(e => {
        console.log('Error while detecting: ', e);
        setSsid('checkSsid\n' + JSON.stringify(e));
      });
  };

  return (
    <View>
      <Button
        onPress={() => connectToMlgSsid('MLG')}
        title="Connect MLG Ssid!"
      />
      {/* <Text>{ssid}</Text> */}

      {/* <Button onPress={() => dispatch(currentSsid())} title="Current SSID ??" /> */}

      <Button onPress={checkSsid} title="Check Current SSID ??" />

      <Text>{ssid}</Text>
    </View>
  );
}

export default WifiConnectionView;
