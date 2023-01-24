import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import Button from '../ui/Button/Button';
import Control from '../ui/Control/Control';
import ClearStore from '../store/clear-store';

const ClearControl: FC = observer(() => {
  const [store] = useState(() => new ClearStore());

  return (
    <Control
      store={store}
      buttonsRight={[
        <Button key='clear' onClick={() => store.clearInput()}>
          Clear
        </Button>,
        <Button key='hello' onClick={() => store.helloInput()}>
          Hello world
        </Button>,
      ]}
    />
  );
});

export default ClearControl;
