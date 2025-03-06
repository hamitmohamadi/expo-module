import * as React from 'react';

import { OnetransferViewProps } from './Onetransfer.types';

export default function OnetransferView(props: OnetransferViewProps) {
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
