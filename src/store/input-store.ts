import { action, makeObservable, observable } from "mobx";

class InputStore {
  inputValue = '';

  constructor() {
    makeObservable(this, {
      inputValue: observable,
      changeInput: action,
    })
  }

  changeInput(text: string) {
    this.inputValue = text;
  }
}

export default InputStore;