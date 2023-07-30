import { Key } from "..";
import { createAppState } from "@helper/index";
import { Calculator, CalculatorAction } from "@misc/index";

export function KeysContainer() {
  const appState = createAppState();
  const calculator = new Calculator(appState);

  const handleOnClick = (div: HTMLDivElement, action: CalculatorAction) => {
    calculator.handleAction(action, div.innerText);
  };

  return (
    <>
      <Key
        text="7"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="8"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="9"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="DEL"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickDelKey)}
      />
      <Key
        text="4"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="5"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="6"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="+"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickOperatorKey)}
      />
      <Key
        text="1"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="2"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="3"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="-"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickOperatorKey)}
      />
      <Key
        text="."
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickDotKey)}
      />
      <Key
        text="0"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickNumberKey)}
      />
      <Key
        text="/"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickOperatorKey)}
      />
      <Key
        text="x"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickOperatorKey)}
      />
      <Key
        text="RESET"
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickResetKey)}
      />
      <Key
        text="="
        onClick={(e) => handleOnClick(e, CalculatorAction.ClickEqualKey)}
      />
    </>
  );
}
