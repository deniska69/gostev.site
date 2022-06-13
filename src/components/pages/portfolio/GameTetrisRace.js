import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Paragraph from '../../Paragraph';
import Carousel, { CarouselItem } from '../../Carousel';

import gametetrisrace_1 from '../../../assets/portfolio/gametetrisrace/gametetrisrace_1.jpg';
import gametetrisrace_2 from '../../../assets/portfolio/gametetrisrace/gametetrisrace_2.jpg';
import gametetrisrace_3 from '../../../assets/portfolio/gametetrisrace/gametetrisrace_3.jpg';
import gametetrisrace_4 from '../../../assets/portfolio/gametetrisrace/gametetrisrace_4.jpg';

function GameTetrisRace() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Игра "Game Tetris Race"
          </Heading>
          <a href="https://github.com/deniska69/Game-Tetris-Race" target="_blank" rel="noreferrer">
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
        <Carousel>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={gametetrisrace_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={gametetrisrace_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={gametetrisrace_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={gametetrisrace_4}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          Game Tetris Race - Компьютерная игра, разработанная в ходе выполнения курсовой работы. Референсом для разработки послужила игра, входящая в список встроенных игр на
          портативной консоли "Brick Game", выполненная в виде симулятора езды на автомобиле с видом сверху. Основной задачей игрового процесса является уклонение от
          движущихся сверху вниз автомобилей оппонентов. Стилизация игры выполнена в виде клеточного поля 20x9. Модели автомобилей игрока и оппонентов выполнены в виде
          совмещённых закрашенных клеток. В игре присутствует прогрессивная "сложность" игрового процесса, путём увеличения скорости движения автомобилей оппонентов.
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

export default GameTetrisRace;
