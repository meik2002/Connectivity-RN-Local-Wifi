import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

import {connectToSsidWithPrefix, currentSsid} from '../Features/WifiSlice';
import {useAppDispatch, useAppSelector} from '../Store/Store';

function WifiConnectionView() {
  const dispatch = useAppDispatch();
  const [ssid, setSsid] = useState('');
  const [ssidPrefix, onChangeSsidPrefix] = useState('MLG');

  const connectToMlgSsid = () => {
    setSsid('');
    WifiManager.connectToSSIDPrefix(ssidPrefix)
      .then(() => checkSsid())
      .catch(e => {
        console.error('ConnectToSsidWithPrefix: ', JSON.stringify(e));
        setSsid(`Unable to connect to Ssid starting wiht ${ssidPrefix}`);
      });
  };

  const checkSsid = () => {
    console.log('check ssid');
    setSsid('');
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
    <View style={{margin: 25}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text>Ssid prefix: </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
            width: '100%',
          }}
          onChangeText={onChangeSsidPrefix}
          value={ssidPrefix}
          placeholder="Ssid prefix"
        />
      </View>
      <View style={{padding: 10}}>
        <Button onPress={connectToMlgSsid} title="Connect MLG Ssid!" />
      </View>
      <View style={{padding: 10}}>
        <Button onPress={checkSsid} title="Check Current SSID ??" />
      </View>
      <Text>Currently connected to : {ssid}</Text>
    </View>
  );
}

export default WifiConnectionView;
