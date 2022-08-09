import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Service() {
  return (
    <Flex
      direction={{ base: 'column', large: 'row' }}
      maxWidth="32rem"
      padding="1rem"
      width="100%"
    >
      <Image
        alt="Abstract art"
        height="21rem"
        src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
        width="100%"
      />
      <Flex justifyContent="space-between" direction="column">
        <Heading level={3}>Solar Lamps Project</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          sed cras ornare arcu dui. Duis aute irure dolor in reprehenderit in
          voluptate velit esse.
        </Text>
        <Button
          variation="primary"
          onClick={() => alert('Opening album')}
        >
          Photographs
        </Button>
      </Flex>
    </Flex>
  );
}

export default Service;
