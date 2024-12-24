import { registerWebModule, NativeModule } from 'expo';

import { ReactNativeFoldablesModuleEvents } from './ReactNativeFoldables.types';

class ReactNativeFoldablesModule extends NativeModule<ReactNativeFoldablesModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ReactNativeFoldablesModule);
