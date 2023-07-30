import { CalculatorAction, CalculatorState, CalculatorStates } from "..";

import type { AppStateType } from "@models/index";

export class ClickingEqual extends CalculatorState {
  private _isClickedEqual = false;

  protected handleClickNumberKey(state: AppStateType, arg: any): void {
    if (this._isClickedEqual) {
      if (state.operator.value == "") {
        this._context?.transitionTo(CalculatorStates.ClickedEqual);
        return;
      }

      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickNumberKey, arg);
      this._context?.transitionTo(CalculatorStates.ClickedEqual);
    } else {
      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickNumberKey, arg);
    }
  }

  protected handleClickOperatorKey(state: AppStateType, arg: any): void {
    if (this._isClickedEqual) {
      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickOperatorKey, arg);
      this._context?.transitionTo(CalculatorStates.ClickedEqual);
    } else {
      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickOperatorKey, arg);
    }
  }

  protected handleClickDotKey(state: AppStateType): void {
    if (this._isClickedEqual) {
      if (state.operator.value == "") {
        this._context?.transitionTo(CalculatorStates.ClickedEqual);
        return;
      }

      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickDotKey, null);
      this._context?.transitionTo(CalculatorStates.ClickedEqual);
    } else {
      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickDotKey, null);
    }
  }

  protected handleClickEqualKey(state: AppStateType): void {
    const parseFirst = parseFloat(state.firstString.value.replace(",", "."));
    const parseSecond = parseFloat(state.secondString.value.replace(",", "."));

    const operator = state.operator.value;

    if (
      Number.isNaN(parseFirst) ||
      Number.isNaN(parseSecond) ||
      operator == ""
    ) {
      this._context?.transitionTo(CalculatorStates.ClickedEqual);
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
    state.operator.value = "";

    this._isClickedEqual = true;
  }

  protected handleClickDelKey(state: AppStateType): void {
    if (this._isClickedEqual) {
      if (state.operator.value == "") {
        this.handleClickResetKey(state);
        return;
      }

      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickDelKey, null);
      this._context?.transitionTo(CalculatorStates.ClickedEqual);
    } else {
      this._context?.transitionTo(CalculatorStates.Inputting);
      this._context?.handleAction(CalculatorAction.ClickDelKey, null);
    }
  }

  protected handleClickResetKey(state: AppStateType): void {
    this._isClickedEqual = false;
    this._context?.transitionTo(CalculatorStates.Resetting);
    this._context?.handleAction(CalculatorAction.ClickResetKey, null);
  }
}
