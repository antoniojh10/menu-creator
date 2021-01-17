import Head from "next/head";
import { GlobalStyle, Container } from "../styles/global";

function HomePage() {
  return (
    <>
      <Head>
        <title>Menu Creator</title>
      </Head>
      <GlobalStyle />
      <Container>
        <h1>Welcome to Menu Creator</h1>
      </Container>
    </>
  );
}

export default HomePage;
