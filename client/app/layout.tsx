"use client";

import use_fonts from "@/constants/fonts";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import NewsScreenHeader from "@/components/news_screen_header";
import NewsScreenFooter from "@/components/news_screen_footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { open_sans } = use_fonts()


  return (
    <Provider store={store}>
      <html lang="en">
        <body className={open_sans.className}>
          <div className="w-full h-[100vh] bg-[white]">
            <NewsScreenHeader />
            <div className="overflow-y-scroll w-full h-[calc(100%-53px)]">
              <div className="w-full">
                {children}
              </div>

              <NewsScreenFooter />
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
