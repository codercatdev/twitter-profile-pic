import "../styles/globals.css";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <UserProvider>
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://devrelsocial.com",
          site_name: "DevRel Social",
          description: "Making your social media experience easier.",
        }}
        twitter={{
          handle: "@codercatdev",
          site: "@codingcatdev",
          // cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    // </UserProvider>
  );
}

export default MyApp;
