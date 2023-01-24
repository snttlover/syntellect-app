import { flow, makeObservable, override } from "mobx";
import InputStore from "./input-store";

class AlertStore extends InputStore {

  constructor() {
    super();
    makeObservable(this, {
      inputValue: override,
      changeInput: override,
      alertNumber: flow,
      alertValue: flow,
    })
  }

  alertNumber() {
    if(!isNaN(Number(this.inputValue)) && this.inputValue !== '') {
      alert(this.inputValue)
    } else {
      return;
    }
  }

  alertValue() {
    this.inputValue !== '' && alert(this.inputValue)
  }
}

export default AlertStore;