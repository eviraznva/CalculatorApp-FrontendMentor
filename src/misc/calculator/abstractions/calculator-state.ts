import { Calculator, CalculatorAction } from "..";

import type { AppStateType } from "@models/index";

export abstract class CalculatorState {
  protected _context?: Calculator;

  public setContext(context: Calculator) {
    this._context = context;
  }

  public handleAction(
    state: AppStateType,
    action: CalculatorAction,
    arg: any
  ): void {
    switch (action) {
      case CalculatorAction.ClickNumberKey:
        this.handleClickNumberKey(state, arg);
        break;
      case CalculatorAction.ClickOperatorKey:
        this.handleClickOperatorKey(state, arg);
        break;
      case CalculatorAction.ClickDotKey:
        this.handleClickDotKey(state);
        break;
      case CalculatorAction.ClickEqualKey:
        this.handleClickEqualKey(state);
        break;
      case CalculatorAction.ClickDelKey:
        this.handleClickDelKey(state);
        break;
      case CalculatorAction.ClickResetKey:
        this.handleClickResetKey(state);
        break;
    }
  }

  protected abstract handleClickNumberKey(state: AppStateType, arg: any): void;
  protected abstract handleClickOperatorKey(
    state: AppStateType,
    arg: any
  ): void;
  protected abstract handleClickDotKey(state: AppStateType): void;
  protected abstract handleClickEqualKey(state: AppStateType): void;
  protected abstract handleClickDelKey(state: AppStateType): void;
  protected abstract handleClickResetKey(state: AppStateType): void;
}