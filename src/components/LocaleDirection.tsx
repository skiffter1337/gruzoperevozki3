'use client';

import { useEffect } from 'react';

interface LocaleDirectionProps {
  dir: 'rtl' | 'ltr';
  lang: string;
}

export default function LocaleDirection({ dir, lang }: LocaleDirectionProps) {
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('dir', dir);
    html.setAttribute('lang', lang);
    document.body.setAttribute('dir', dir);
    document.body.setAttribute('lang', lang);
  }, [dir, lang]);

  return null;
}
