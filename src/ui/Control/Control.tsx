import { observer } from 'mobx-react-lite';
import React, { FC, ReactElement } from 'react';
import InputStore from '../../store/input-store';

import './Control.css';

interface ControlProps {
  store: InputStore;
  buttonsLeft?: ReactElement[];
  buttonsRight?: ReactElement[];
}

const Control: FC<ControlProps> = observer(({ buttonsLeft, buttonsRight, store }) => {
  return (
    <div>
      <Buttons buttonsList={buttonsLeft} />
      <input
        type='text'
        value={store.inputValue}
        onChange={(e) => (store.inputValue = e.target.value)}
      />
      <Buttons buttonsList={buttonsRight} />
    </div>
  );
});

const Buttons = observer(({ buttonsList }: { buttonsList?: ReactElement[] }) => {
  const isFewButtons = buttonsList && buttonsList.length <= 1;

  return (
    <>{isFewButtons ? (buttonsList && buttonsList[0]) || null : buttonsList?.map((item) => item)}</>
  );
});

export default Control;
