import React from 'react';
import { Container, Heading, Divider, Text } from '@chakra-ui/react';
//import Section from '../Section';

function Portfolio() {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Портфолио
      </Heading>
      <Divider my={6} marginBottom="1rem" />
      <Text>Тут скоро появятся проекты</Text>
    </Container>
  );
}

export default Portfolio;
