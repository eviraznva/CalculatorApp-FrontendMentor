import { CalculatorAction, CalculatorState, CalculatorStates } from "..";

import type { AppStateType } from "@models/index";

export class ClickingOperator extends CalculatorState {
  protected handleClickNumberKey(state: AppStateType, arg: any): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickNumberKey, arg);
  }

  protected handleClickOperatorKey(state: AppStateType, arg: any): void {
    const operator = state.operator.value;

    if (operator == "") state.operator.value = arg;
    else {
      const parseFirst = parseFloat(state.firstString.value.replace(",", "."));
      const parseSecond = parseFloat(
        state.secondString.value.replace(",", ".")
      );

      if (Number.isNaN(parseFirst) || Number.isNaN(parseSecond)) {
        this._context?.transitionTo(CalculatorStates.ClickedOperator);
        return;
      }

      if (operator == "+")
        state.firstString.value = `${parseFirst + parseSecond}`;
      else if (operator == "-")
        state.firstString.value = `${parseFirst - parseSecond}`;
      else if (operator == "x")
        state.firstString.value = `${parseFirst * parseSecond}`;
      else state.firstString.value = `${parseFirst / parseSecond}`;

      state.secondString.value = "";
      state.operator.value = arg;
    }

    this._context?.transitionTo(CalculatorStates.ClickedOperator);
  }

  protected handleClickDotKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickDotKey, null);
  }

  protected handleClickEqualKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickEqualKey, null);
  }

  protected handleClickDelKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickDelKey, null);
  }

  protected handleClickResetKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickResetKey, null);
  }
}
