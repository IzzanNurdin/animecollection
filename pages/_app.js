import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CollectionContextProvider } from "../context/CollectionContext";
import "react-toastify/dist/ReactToastify.css";

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io",
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <CollectionContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CollectionContextProvider>
  );
}

export default MyApp;
