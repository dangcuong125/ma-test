import { ReduxProviders } from "@/common/redux/provider";
import AppThemeProvider from "@/common/styles/app-theme-provider";
import Providers from "@/common/utils/provider";
import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import "src/common/styles/css/global.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import NotistackProvider from "@/common/components/NotistackProvider";

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
                <NotistackProvider>
                  <main>{children}</main>
                  </NotistackProvider>
              </Providers>
            </ReduxProviders>
          </AppThemeProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
