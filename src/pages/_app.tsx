import { Footer, Nav } from "@/components";
import { store } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/landing.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen w-full flex-col items-center bg-neutral-50">
        <Nav></Nav>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </Provider>
  );
}
