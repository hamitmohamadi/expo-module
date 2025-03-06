import { registerWebModule, NativeModule } from 'expo';

import { OnetransferModuleEvents } from './Onetransfer.types';

class OnetransferModule extends NativeModule<OnetransferModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(OnetransferModule);
