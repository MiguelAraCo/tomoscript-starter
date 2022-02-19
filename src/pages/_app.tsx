import { createEmotionCache } from '@/utils/emotion/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '@/styles/theme/darkTheme';
import { EmotionCache } from '@emotion/cache';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { NextRouter } from 'next/dist/client/router';

import '@/styles/global.css';

const clientSideEmotionCache = createEmotionCache();

export type AppProps<PageProps = any> = {
  pageProps: PageProps;
  emotionCache?: EmotionCache;
} & Omit<AppPropsType<NextRouter, PageProps>, 'pageProps'>;

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
