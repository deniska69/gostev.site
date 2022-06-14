import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Paragraph from '../../Paragraph';
import Carousel, { CarouselItem } from '../../Carousel';

import inote_1 from '../../../assets/portfolio/inote/inote_1.jpg';
import inote_2 from '../../../assets/portfolio/inote/inote_2.jpg';
import inote_3 from '../../../assets/portfolio/inote/inote_3.jpg';
import inote_4 from '../../../assets/portfolio/inote/inote_4.jpg';
import inote_5 from '../../../assets/portfolio/inote/inote_5.jpg';
import inote_6 from '../../../assets/portfolio/inote/inote_6.jpg';

function INoteApp() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Desktop-приложение "iNote"
          </Heading>
          <a href="https://github.com/deniska69/iNote" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub color={colorGitHub} />
              <Text color={colorGitHub}>GitHub</Text>
            </HStack>
          </a>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="purple">C#</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel title={'Desktop-приложение "iNote"'}>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={inote_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={inote_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={inote_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={inote_4}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={inote_5}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={inote_6}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          iNote - Приложение разработанное в ходе выполнения курсовой работы. Приложение выполненно в виде встроенного приложения "Блокнот" в ОС Windows, с повторением
          основного функционала форматирования текста, с возвожностью аторизации в социальной сети "Вконтакте" посредством выполнения "HTTP" запросов к API, для последующей
          рассылке текста в личные сообщения друзей, а также на "стены" групп, к управлению которых имеется доступ у учётной записи, через которую была выполненна авторизация.
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="purple">.Net C#</Code>
          </Box>
        </Stack>
      </Section>
    </Container>
  );
}

export default INoteApp;
