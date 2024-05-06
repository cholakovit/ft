import React from "react";

const Message: React.FC<MessageProps> = ({ message, type }) => {
  const color = type === "error" ? "red" : "green";

  return <div style={{ color: color }}>{message}</div>;
};

export default React.memo(Message);
