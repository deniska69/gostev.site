import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, UnorderedList, ListItem, Code } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Carousel, { CarouselItem } from '../../Carousel';

import extremesubaruracing_1 from '../../../assets/portfolio/extremesubaruracing/extremesubaruracing_1.jpg';
import extremesubaruracing_2 from '../../../assets/portfolio/extremesubaruracing/extremesubaruracing_2.jpg';
import extremesubaruracing_3 from '../../../assets/portfolio/extremesubaruracing/extremesubaruracing_3.jpg';
import extremesubaruracing_4 from '../../../assets/portfolio/extremesubaruracing/extremesubaruracing_4.jpg';
import extremesubaruracing_5 from '../../../assets/portfolio/extremesubaruracing/extremesubaruracing_5.jpg';

function ExtremeSubaruRacing() {
  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Игра "Extreme Subaru Racing"
          </Heading>
          <a href="https://github.com/deniska69/Extreme-Subaru-Racing" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub />
              <Text as="h3">GitHub</Text>
            </HStack>
          </a>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="purple">C#</Badge>
          <Badge colorScheme="cyan">Microsoft XNA</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={extremesubaruracing_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={extremesubaruracing_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={extremesubaruracing_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={extremesubaruracing_4}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={extremesubaruracing_5}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Text>
          Extreme-Subaru-Racing - Компьютерная игра, разработанная в ходе выполнения курсовой работы. Стилизация игры выполненна в виде игрового поля с эмитацией движения
          игровым автомобилем по дороге, с уклонением от встречающихся препятствий в виде дорожной ямы, металлической бочки и дорожного знака.
        </Text>
        <br />
        <Text>В игре присутствует:</Text>
        <UnorderedList>
          <ListItem>прогрессивная "сложность" игрового процесса, путём увеличения скорости движения препятствий;</ListItem>
          <ListItem>система "очков жизни" убывающая при столкновении с препятствиями, и восполняющаяся при "подборе" встречающихся элементов в виде сердца;</ListItem>
          <ListItem>звуковое сопровождение в виде радио из 6 композий;</ListItem>
          <ListItem>звуковое сопровождение успешных уклонений от препятствий;</ListItem>
          <ListItem>звуковое и графическое сопровждение столкновений с препятствиями;</ListItem>
        </UnorderedList>
        <br />
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="purple">.Net C#</Code>
          </Box>
        </Stack>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Фреймворк:
          </Heading>
          <Box>
            <Code colorScheme="cyan">Microsoft XNA Framework*</Code>
          </Box>
        </Stack>

        <Text rounded={'md'}>
          * Microsoft XNA Framework — набор инструментов с управляемой средой времени выполнения (.NET), созданный Microsoft, облегчающий разработку и управление компьютерными
          играми.
        </Text>
      </Section>
    </Container>
  );
}

export default ExtremeSubaruRacing;
