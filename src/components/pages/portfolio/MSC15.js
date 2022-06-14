import React from 'react';
import { Container, Heading, useColorModeValue, Stack, Badge, HStack, Box, Text, Code } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Paragraph from '../../Paragraph';
import Carousel, { CarouselItem } from '../../Carousel';

import msc15_1 from '../../../assets/portfolio/msc15/msc15_1.jpg';
import msc15_2 from '../../../assets/portfolio/msc15/msc15_2.jpg';
import msc15_3 from '../../../assets/portfolio/msc15/msc15_3.jpg';

function MSC15() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            МБОУ "СОШ №15"
          </Heading>
          <a href="https://github.com/deniska69/msc15" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub color={colorGitHub} />
              <Text color={colorGitHub}>GitHub</Text>
            </HStack>
          </a>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="blue">Python</Badge>
          <Badge colorScheme="yellow">Django</Badge>
          <Badge colorScheme="orange">MySQL</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel title={'МБОУ "СОШ №15"'}>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={msc15_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={msc15_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={msc15_3}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>Сайт разработан в ходе изучения Web-разработки и шаблона проектирования MVC.</Paragraph>
      </Section>

      <Section delay={0.5}>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="blue">Python</Code>
          </Box>
        </Stack>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Фреймворк:
          </Heading>
          <Box>
            <Code colorScheme="yellow">Django</Code>
          </Box>
        </Stack>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            База данных:
          </Heading>
          <Box>
            <Code colorScheme="orange">MySQL</Code>
          </Box>
        </Stack>
      </Section>
    </Container>
  );
}

export default MSC15;
