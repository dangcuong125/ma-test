import { ReduxProviders } from "@/common/redux/provider";
import AppThemeProvider from "@/common/styles/app-theme-provider";
import Providers from "@/common/utils/provider";
import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import 'src/common/styles/global.css'
import LayoutApp from "@/components/layout";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "mui", prepend: true }}>
          <AppThemeProvider>
            <ReduxProviders>
              <Providers>
                <LayoutApp>{children}</LayoutApp>
              </Providers>
            </ReduxProviders>
          </AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
