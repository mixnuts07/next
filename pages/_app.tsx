import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { store } from "../src/stores/store";
import { Provider as RtkProvider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Layout from "../src/components/layouts/Layout";

const client = new ApolloClient({
  // uri ... GraphQLサーバのURL
  uri: "https://flyby-gateway.herokuapp.com/",
  // ApolloClientがフェッチ後にクエリ結果をキャッシュするために使用
  cache: new InMemoryCache(),
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <RtkProvider store={store}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </RtkProvider>
    </SessionProvider>
  );
}
