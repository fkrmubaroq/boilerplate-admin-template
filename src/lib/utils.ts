import classNames from "classnames"
export function cn(...className: classNames.ArgumentArray) {
  return classNames(className);
}