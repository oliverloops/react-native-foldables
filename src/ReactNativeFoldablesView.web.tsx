import * as React from 'react';

import { ReactNativeFoldablesViewProps } from './ReactNativeFoldables.types';

export default function ReactNativeFoldablesView(props: ReactNativeFoldablesViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
