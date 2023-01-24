import { action, makeObservable, observable, override } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";
import InputStore from "./input-store";

class AutocompleteStore extends InputStore {
  hints: CountryInfo[] = [];

  constructor() {
    super();
    makeObservable(this, {
      inputValue: override,
      changeInput: override,
      hints: observable,
      setHints: action,
      loadHints: action,
    })
  }

  setHints(arr: CountryInfo[]) {
    this.hints = arr
  }

  loadHints(value: string, maxHints?: number) {
    getCountryByName(value).then(result => this.setHints(result.slice(0, maxHints)))
  }

}

export default AutocompleteStore;