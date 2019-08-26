import * as React from "react";
import classNames from "classnames";
import "../css.scss";

export enum Mode {
  Text,
  Outlined,
  Contained
}

interface bt_bsic_props {
  word: string;
  mode: number;
  icon?: string;
  color?: string[];
  onClick?: () => void;
}

const Module: React.FC<bt_bsic_props> = props => {
  const classname = "bt_bsic";
  const { word, mode, onClick } = props;

  return (
    <button
      className={classNames(classname, Mode[mode])}
      onClick={() => onClick && onClick()}
    >
      <span>{word}</span>
    </button>
  );
};
export default Module;
