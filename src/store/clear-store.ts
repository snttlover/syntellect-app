import { action, makeObservable, override } from "mobx";
import InputStore from "./input-store";

class ClearStore extends InputStore {

  constructor() {
    super();
    makeObservable(this, {
      inputValue: override,
      changeInput: override,
      clearInput: action,
      helloInput: action
    })
  }

  clearInput() {
    this.inputValue = '';
  }

  helloInput() {
    this.inputValue = 'Hello world';
  }
}

export default ClearStore;