import React from "react";

interface ErrorDetail {
  msg: string;
  loc: string[];
  input?: unknown;
  type?: string;
}

interface ErrorMessageListProps {
  errors: ErrorDetail[] | string;
}

const ErrorToastMessage: React.FC<ErrorMessageListProps> = ({ errors }) => {
  if (!errors || errors.length === 0) return null;

  const renderInput = (input: unknown) => {
    if (input === undefined || input === null) return null;
    if (typeof input === "object") {
      const content = JSON.stringify(input, null, 2);
      return (
        <pre style={{ margin: 0, fontSize: "0.85em" }}>Value: {content}</pre>
      );
    }
    return (
      <div style={{ margin: 0, fontSize: "0.85em" }}>
        Value: {String(input)}
      </div>
    );
  };

  if (!errors) return null;

  if (typeof errors === "string") {
    return (
      <div>
        <strong>Error:</strong> {errors}
      </div>
    );
  }

  if (!Array.isArray(errors) || errors.length === 0) {
    return null;
  }

  return (
    <div>
      {errors.map((error, idx) => (
        <div key={idx} style={{ marginBottom: "8px" }}>
          <strong>{error.msg}</strong>
          <br />
          <div>Field: {error.loc.join(".")}</div>
          {renderInput(error.input)}
        </div>
      ))}
    </div>
  );
};

export default ErrorToastMessage;
