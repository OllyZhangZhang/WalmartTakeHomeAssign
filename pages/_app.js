import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { Switch } from "@chakra-ui/react"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { Component } from "react";
import "../styles/globals.css";
import Orders from "./api/orders";

class MyApp extends Component {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    return (<div>
      <Head>
        <title>Walmart Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        style={{
          display: "flex",
          width: "100%",
          height: "75px",
          background: "#0071DC",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingTop: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Image src="/sparkle.svg" alt="walmart logo" width={30} height={30} />
        </div>
      </nav>
      <div>
        <Orders></Orders>
      </div>
    </div>);
  }
}

export default MyApp;
