import React, { useRef, useState } from "react";
import { kebabCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Overlay, Tooltip } from "react-bootstrap";

export default function MiscProfile({ brand, icon, href, username }) {
  const anchor = useRef(null);

  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const [copyStatus, setCopyStatus] = useState(null);
  const copyUsername = async () => {
    try {
      const permission = await navigator.permissions.query({
        name: "clipboard-write",
      });
      if (["granted", "prompt"].includes(permission.state)) {
        await navigator.clipboard.writeText(username);
        setCopyStatus("success");
      } else {
        setCopyStatus("failure");
      }
    } catch (e) {
      setCopyStatus("failure");
    }
  };

  return (
    <div className="p-3">
      <a
        href={href}
        title={brand}
        className={`${kebabCase(brand.toLowerCase())}-link d-inline-block`}
        {...(username && {
          ref: anchor,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false),
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          onClick: copyUsername,
          tabIndex: 0,
          style: { cursor: "pointer" },
        })}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>

      {username && (
        <Overlay target={anchor.current} show={hover || focus}>
          {(props) => (
            <Tooltip
              id={`${kebabCase(brand.toLowerCase())}-username`}
              {...props}
            >
              {copyStatus && (
                <div className="text-center">
                  {copyStatus === "success" ? (
                    <small className="font-italic">Copied to clipboard!</small>
                  ) : (
                    <small className="font-italic">
                      Error copying to clipboard
                    </small>
                  )}
                </div>
              )}
              <div className="text-center">
                <strong>Username:</strong> {username}
              </div>
            </Tooltip>
          )}
        </Overlay>
      )}
    </div>
  );
}
