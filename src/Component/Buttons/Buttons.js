import React from "react";
import {style} from '../../Assets/css/styles.scss'

function Button(props) {
  const className = `button ${props.type}`;

  return (
    <button className={className}>
      {props.icon && props.icon} {props.label}
    </button>
  );
}

Button.defaultProps = {
  type: "secondary"
};

export default Button;
