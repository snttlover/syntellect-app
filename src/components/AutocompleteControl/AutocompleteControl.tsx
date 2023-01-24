import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import Control from '../../ui/Control/Control';
import AutocompleteStore from '../../store/autocomplete-store';

import './AutocompleteControl.css';
import { NumberInput } from '../../ui/NumberInput/NumberInput';

interface AutocompleteControlProps {
  maxHints: number;
}

const AutocompleteControl: FC<AutocompleteControlProps> = observer(({ maxHints }) => {
  const [limit, setLimit] = useState<number>(maxHints)
  const [store] = useState(() => new AutocompleteStore());

  const changeLimit = (value: string) => {
    if (Number(value) <= maxHints) setLimit(Number(value))
  }

  return (
    <div>
      <div className="country-control">
        <NumberInput value={limit} onChange={changeLimit} />
        <Control store={store}/>
      </div>
      <AutocompleteHints store={store} maxHints={limit} />
    </div>
  );
});

const AutocompleteHints = observer(
  ({ store, maxHints }: { store: AutocompleteStore; maxHints: number }) => {
    useEffect(() => {
      store.loadHints(store.inputValue, maxHints);
    }, [store.inputValue, maxHints]);

    return (
      <ul>
        {store.hints?.map((item) => (
          <li onClick={() => store.changeInput(item.fullName)} key={item.name}>
            <p>{`${item.name}, ${item.fullName}`}</p>
            <img src={item.flag} alt={'flag'} />
          </li>
        ))}
      </ul>
    );
  },
);

export default AutocompleteControl;
