import * as React from 'react';
import {Text} from 'react-native';

import styles from './styles';

type Props = {
  type: 'title' | 'subtitle' | 'label' | 'headline',
  mode: 'uppercase' | 'lowercase' | 'capitalize' | undefined,
  color?: string,
  children: node,
};

export default function Typography({
  children,
  type = 'text',
  mode = undefined,
  color = 'primary',
}: Props) {
  return (
    <Text
      style={[
        styles[color],
        styles[type],
        mode !== undefined ? styles[mode] : '',
      ]}>
      {children}
    </Text>
  );
}
