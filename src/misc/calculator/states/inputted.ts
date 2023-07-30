import { CalculatorAction, CalculatorState, CalculatorStates } from "..";

import type { AppStateType } from "@models/index";

export class Inputted extends CalculatorState {
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
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickDelKey, null);
  }

  protected handleClickResetKey(state: AppStateType): void {
    this._context?.transitionTo(CalculatorStates.Inputting);
    this._context?.handleAction(CalculatorAction.ClickResetKey, null);
  }
}
