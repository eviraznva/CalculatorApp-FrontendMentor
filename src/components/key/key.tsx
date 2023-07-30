import "./key.sass";
import type { KeyProps } from "@models/key-props";

export function Key(props: KeyProps) {
  return (
    <div
      data-key={props.text}
      class="key"
      onClick={(e) =>
        props.onClick != undefined
          ? props.onClick(e.target as HTMLDivElement)
          : () => {}
      }
    >
      {props.text}
    </div>
  );
}
