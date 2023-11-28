import React from 'react';
import {Button, View} from 'react-native/types';
import {connectToSsidWithPrefix} from '../Features/WifiSlice';
import {useAppDispatch} from '../Store/Store';

function WifiConnectionView() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Button
        onPress={() => dispatch(connectToSsidWithPrefix('MGL'))}
        title="HELP!"
      />
    </View>
  );
}

export default WifiConnectionView;
