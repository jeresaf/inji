import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Centered, Column } from '../components/ui';
import { Colors } from '../components/ui/styleUtils';
import { RootRouteProps } from '../routes';
import { useBiometricScreen } from './BiometricScreenController';


export const BiometricScreen: React.FC<RootRouteProps> = (props) => {
  const controller = useBiometricScreen(props);

  return (
    <Column fill padding="32" backgroundColor={Colors.White}>

      <Centered fill>
        <TouchableOpacity onPress={controller.useBiometrics}>
          <Icon name="fingerprint" size={180} color={Colors.Orange} />
        </TouchableOpacity>
      </Centered>

    </Column>
  );
};
