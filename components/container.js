import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "",
        props.large ? " " : "",
        !props.alt && "",
        props.className
      )}>
      {props.children}
    </div>
  );
}
