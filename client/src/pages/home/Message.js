import React from "react";
import { useAuthState } from "../../context/auth";
import classNames from "classNames";

export default function Message({ message }) {
  const { user } = useAuthState();

  const sent = message.from === user.username;
  const received = !sent;

  return (
    <div className="d-flex my-3">
      <div
        className={classNames("py-2 px3 rounded-pill bg-primary", {
          "bg-primary": sent,
          "bg-secondary": received,
        })}
      >
        <p className={classNames({ "text-white": sent })} key={message.uuid}>
          {message.content}
        </p>
      </div>
    </div>
  );
}
