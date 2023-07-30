import { CalculatorAction, CalculatorState, CalculatorStates } from "..";

import type { AppStateType } from "@models/index";

export class Inputting extends CalculatorState {
  protected handleClickNumberKey(state: AppStateType, arg: any): void {
    if (state.operator.value == "") {
      const firstString = state.firstString.value;

      if (arg == "0" && firstString == "0") {
        this._context?.transitionTo(CalculatorStates.Inputted);
        return;
      } else if (firstString == "0") state.firstString.value = "";

      state.firstString.value += arg;
    } else {
      const secondString = state.secondString.value;

      if (arg == "0" && secondString == "0") {
        this._context?.transitionTo(CalculatorStates.Inputted);
        return;
      } else if (secondString == "0") state.secondString.value = "";

      state.secondString.value += arg;
    }

    this._context?.transitionTo(CalculatorStates.Inputted);
  }

  protected handleClickOperatorKey(state: AppStateType, arg: any): void {
    if (
      this.isValidDot(state.firstString.value) &&
      this.isValidDot(state.secondString.value)
    ) {
      this._context?.transitionTo(CalculatorStates.ClickingOperator);
      this._context?.handleAction(CalculatorAction.ClickOperatorKey, arg);
    } else {
      this._context?.transitionTo(CalculatorStates.Inputted);
    }
  }

  protected handleClickDotKey(state: AppStateType): void {
    if (state.operator.value == "") {
      const firstString = state.firstString.value;

      if (firstString.includes(",")) {
        this._context?.transitionTo(CalculatorStates.Inputted);
        return;
      }

      state.firstString.value += ",";
    } else {
      const secondString = state.secondString.value;

      if (secondString == "") {
        this._context?.transitionTo(CalculatorStates.Inputted);
        return;
      }

      if (secondString.includes(",")) {
        this._context?.transitionTo(CalculatorStates.Inputted);
        return;
      }

      state.secondString.value += ",";
    }

    this._context?.transitionTo(CalculatorStates.Inputted);
  }

  protected handleClickEqualKey(state: AppStateType): void {
    if (state.operator.value == "") {
      this._context?.transitionTo(CalculatorStates.Inputted);
      return;
    }

    if (
      !(
        this.isValidDot(state.firstString.value) &&
        this.isValidDot(state.secondString.value)
      )
    ) {
      this._context?.transitionTo(CalculatorStates.Inputted);
      return;
    }

    this._context?.transitionTo(CalculatorStates.ClickingEqual);
    this._context?.handleAction(CalculatorAction.ClickEqualKey, null);
  }

  protected handleClickDelKey(state: AppStateType): void {
    if (state.firstString.value == "0") {
      this._context?.transitionTo(CalculatorStates.Inputted);
      return;
    }

    this._context?.transitionTo(CalculatorStates.Deleting);
    this._context?.handleAction(CalculatorAction.ClickDelKey, null);
  }

  protected handleClickResetKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Resetting);
    this._context?.handleAction(CalculatorAction.ClickResetKey, null);
  }

  private isValidDot(value: string): boolean {
    return value.slice(-1) == "," ? false : true;
  }
}
