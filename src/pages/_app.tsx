import "./../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";
import { darkTheme } from "../themes";
import { EntriesProvider, UIProvider } from "../context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <EntriesProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </EntriesProvider>
    </UIProvider>
  );
}
