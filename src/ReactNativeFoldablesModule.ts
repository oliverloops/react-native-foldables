import { NativeModule, requireNativeModule } from 'expo';

import { ReactNativeFoldablesModuleEvents } from './ReactNativeFoldables.types';

declare class ReactNativeFoldablesModule extends NativeModule<ReactNativeFoldablesModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeFoldablesModule>('ReactNativeFoldables');
