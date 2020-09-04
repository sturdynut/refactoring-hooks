import React from "react";

const defaults = {
  url: "https://picsum.photos/id/1084/536/354?grayscale",
  size: 200
}

const getUrl = size => `https://picsum.photos/${size}`

export function useUrl() {
  const [size, setSize] = React.useState(defaults.size);
  const [url, setUrl] = React.useState(defaults.url);

  const update = (value) => {
    setUrl(getUrl(value));
    setSize(value);
  }

  return {
    size,
    update,
    url,
  };
}
