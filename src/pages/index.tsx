import Head from 'next/head';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box flex="1" display="flex" alignItems="center" justifyContent="center">
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h1">Hello!</Typography>
    </Box>
  );
}
