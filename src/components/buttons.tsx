import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit";
  icon?: ReactNode;
  content: ReactNode;
  hint?: string;
  processing?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = ({
  type = "button",
  icon,
  content,
  processing,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className="btn btn-primary"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? (
        <div className="btn-icon animate-spin">
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </div>
      ) : null}
      {content ? (
        <div className="btn-content">
          {!icon && processing ? "Processing..." : content}
        </div>
      ) : null}
    </button>
  );
};
