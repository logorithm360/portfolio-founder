import type { MouseEvent } from 'react';

export const handleDownloadCV = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
  e.preventDefault();
  alert("resume downloaded, please open!");
};
