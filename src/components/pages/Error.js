import React from 'react';
import { Container, Heading, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Section from '../Section';

function Error() {
  return (
    <Container pt={120}>
      <Section delay={0.1} mb={0}>
        <Heading as="h3" fontSize={20} mb={4}>
          Ошибка 404 - такой страницы не существует! :с
        </Heading>
      </Section>

      <Section delay={0.2} mb={0}>
        <Box align="center" my={10}>
          <Link to="/" variant="hover-no">
            <Button colorScheme="teal">Вернуться на главную страницу</Button>
          </Link>
        </Box>
      </Section>
    </Container>
  );
}

export default Error;
