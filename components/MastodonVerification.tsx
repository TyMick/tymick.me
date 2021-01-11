import React, { useState, useEffect } from "react";
import { trimStart } from "lodash";

type MastodonVerificationProps =
  | { mastodonUrl?: never; instance: string; username: string }
  | { mastodonUrl: string; instance?: never; username?: never };

export default function MastodonVerification({
  instance,
  username,
  mastodonUrl,
}: MastodonVerificationProps) {
  const href =
    mastodonUrl ?? `https://${instance}/@${trimStart(username, "@")}`;

  // Remove verification link after page loads
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return !pageLoaded && <a rel="me" href={href} />;
}
