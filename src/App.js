import React from "react";
import styled from 'styled-components'
import { Helmet } from "react-helmet-async";
import { Header } from "./routes/Header";
import { Main } from "./routes/Main";
import { Footer } from "./routes/Footer";

const Container = styled.div`
  background-color: #282e33;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <>
    <Container>
      <Helmet><title>CSV</title></Helmet>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
