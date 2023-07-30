import { CalculatorState, CalculatorStates } from "@misc/index";
import {
  Reseted,
  Deleted,
  Deleting,
  Inputted,
  Inputting,
  Resetting,
  ClickedEqual,
  ClickingEqual,
  ClickedOperator,
  ClickingOperator,
} from "@misc/index";

export class CalculatorStatesFactory {
  private _states: { [key: number]: CalculatorState } = <any>{};

  public GetOrCreateState(state: CalculatorStates): CalculatorState {
    if (state in this._states) return this._states[state];
    else
      switch (state) {
        case CalculatorStates.Deleted:
          this._states[state] = new Deleted();
          return this._states[state];
        case CalculatorStates.Reseted:
          this._states[state] = new Reseted();
          return this._states[state];
        case CalculatorStates.Deleting:
          this._states[state] = new Deleting();
          return this._states[state];
        case CalculatorStates.Inputted:
          this._states[state] = new Inputted();
          return this._states[state];
        case CalculatorStates.Inputting:
          this._states[state] = new Inputting();
          return this._states[state];
        case CalculatorStates.Resetting:
          this._states[state] = new Resetting();
          return this._states[state];
        case CalculatorStates.ClickedEqual:
          this._states[state] = new ClickedEqual();
          return this._states[state];
        case CalculatorStates.ClickingEqual:
          this._states[state] = new ClickingEqual();
          return this._states[state];
        case CalculatorStates.ClickedOperator:
          this._states[state] = new ClickedOperator();
          return this._states[state];
        case CalculatorStates.ClickingOperator:
          this._states[state] = new ClickingOperator();
          return this._states[state];
      }
  }
}
