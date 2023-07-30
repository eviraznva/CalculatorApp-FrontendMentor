import type { Signal } from "@preact/signals";

export type AppStateType = {
    firstString: Signal<string>;
    secondString: Signal<string>;
    operator: Signal<string>;
}