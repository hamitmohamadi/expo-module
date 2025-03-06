import { requireNativeView } from 'expo';
import * as React from 'react';

import { OnetransferViewProps } from './Onetransfer.types';

const NativeView: React.ComponentType<OnetransferViewProps> =
  requireNativeView('Onetransfer');

export default function OnetransferView(props: OnetransferViewProps) {
  return <NativeView {...props} />;
}
