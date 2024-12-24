import { requireNativeView } from 'expo';
import * as React from 'react';

import { ReactNativeFoldablesViewProps } from './ReactNativeFoldables.types';

const NativeView: React.ComponentType<ReactNativeFoldablesViewProps> =
  requireNativeView('ReactNativeFoldables');

export default function ReactNativeFoldablesView(props: ReactNativeFoldablesViewProps) {
  return <NativeView {...props} />;
}
