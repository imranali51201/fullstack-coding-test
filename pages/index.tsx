import Head from "next/head";
import DynamicText from "../components/DynamicText";
import { Center, Container } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { useRef } from "react";

const Home = () => {

  const dynamicTextRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dynamicTextRef.current.changeValue(e.target.value)
  };

  return (
    <Center h="full">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <Center flexDirection="column">
          <DynamicText ref={dynamicTextRef} />
          <Input placeholder='Random text' onChange={onChange} />
        </Center>
      </Container>
    </Center>
  );
};

export default Home;
