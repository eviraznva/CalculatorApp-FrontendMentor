import { effect, computed } from "@preact/signals";
import { CalculatorAction, CalculatorStates } from ".";
import { CalculatorStatesFactory } from "@helper/index";

import type { AppStateType } from "@models/index";
import type { CalculatorState } from "./abstractions";

export class Calculator {
  private readonly _appState: AppStateType;
  private readonly _statesFactory;

  private _state?: CalculatorState;

  constructor(appState: AppStateType) {
    this._appState = appState;
    this._statesFactory = new CalculatorStatesFactory();
    this.init();
    this.transitionTo(CalculatorStates.Inputting);
  }

  public transitionTo(state: CalculatorStates): void {
    this._state = this._statesFactory.GetOrCreateState(state);
    this._state.setContext(this);
  }

  public handleAction(action: CalculatorAction, arg: any) {
    this._state?.handleAction(this._appState, action, arg);
  }

  private init() {
    const result = computed(
      () =>
        `${this._appState.firstString.value} ${this._appState.operator.value} ${this._appState.secondString.value}`
    );

    effect(() => {
      const screen = document.querySelector(".screen>span");
      if (screen == null) return;
      (screen as HTMLSelectElement).innerText = result.value;
    });
  }
}
