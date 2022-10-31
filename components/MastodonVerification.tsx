import React, { useState, useEffect } from "react";
import { trimStart } from "lodash";

type Props =
  | { instance: string; username: string; mastodonUrl?: never }
  | { instance?: never; username?: never; mastodonUrl: string };

export default function MastodonVerification({
  instance,
  username,
  mastodonUrl,
}: Props) {
  const href =
    mastodonUrl ?? `https://${instance}/@${trimStart(username, "@")}`;

  // Remove verification link after page loads
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded ? null : <a rel="me" href={href} />;
}
