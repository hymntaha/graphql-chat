import React from "react";
import { useAuthState } from "../../context/auth";
import classNames from "classNames";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Message({ message }) {
  const { user } = useAuthState();

  const sent = message.from === user.username;
  const received = !sent;

  return (
    <OverlayTrigger
      placement={sent ? "right" : "left"}
      overlay={
        <Tooltip>
          {moment(message.createdAt).format("MMMM DD, YYYY @ h:mm a")}
        </Tooltip>
      }
    >
      <div
        className={
          (classNames("d-flex my-3"),
          {
            "ml-auto": sent,
            "ml-left": received,
          })
        }
      >
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
    </OverlayTrigger>
  );
}
