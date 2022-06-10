import React from 'react';
import { Container, Heading, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Ошибка 404 - такой страницы не существует! :с
      </Heading>
      <Box align="center" my={10}>
        <Link to="/" variant="hover-no">
          <Button colorScheme="teal">Вернуться на главную страницу</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Error;
