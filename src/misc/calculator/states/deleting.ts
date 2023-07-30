import { CalculatorAction, CalculatorState, CalculatorStates } from "..";

import type { AppStateType } from "@models/index";

export class Deleting extends CalculatorState {
  protected handleClickNumberKey(state: AppStateType, arg: any): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickNumberKey, arg);
  }

  protected handleClickOperatorKey(state: AppStateType, arg: any): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickOperatorKey, arg);
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
    const firstString = state.firstString.value;
    const secondString = state.secondString.value;

    const operator = state.operator.value;

    if (operator == "") {
      state.firstString.value = firstString.slice(0, -1);
      if (state.firstString.value == "") state.firstString.value = "0";
    } else {
      if (secondString == "") state.operator.value = "";
      else state.secondString.value = secondString.slice(0, -1);
    }

    this._context?.transitionTo(CalculatorStates.Deleted);
  }

  protected handleClickResetKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickResetKey, null);
  }
}
