import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Paragraph from '../../Paragraph';
import Carousel, { CarouselItem } from '../../Carousel';

import zayavka_1 from '../../../assets/portfolio/zayavka/zayavka_1.jpg';
import zayavka_2 from '../../../assets/portfolio/zayavka/zayavka_2.jpg';
import zayavka_3 from '../../../assets/portfolio/zayavka/zayavka_3.jpg';
import zayavka_4 from '../../../assets/portfolio/zayavka/zayavka_4.jpg';
import zayavka_5 from '../../../assets/portfolio/zayavka/zayavka_5.jpg';
import zayavka_6 from '../../../assets/portfolio/zayavka/zayavka_6.jpg';
import zayavka_7 from '../../../assets/portfolio/zayavka/zayavka_7.jpg';

function Zayavka() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Desktop-Приложение "Заявка"
          </Heading>
          <a href="https://github.com/deniska69/Zayavka" target="_blank" rel="noreferrer">
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
          <Badge colorScheme="red">Microsoft Access</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel title={'Desktop-Приложение "Заявка"'}>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_4}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_5}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_6}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={zayavka_7}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          Zayavka - Приложение разработанное в ходе выполнения курсовой работы. Задачей приложения является автоматизация процесса учёта поступающих заявок в IT-отдел.
        </Paragraph>
        <br />
        <Text>Режим Администратора включает в себя:</Text>
        <UnorderedList>
          <ListItem>Добавление/изменение/удаление отделов &#62; сотрудников, корпусов &#62; кабинетов/аудиторий.</ListItem>
        </UnorderedList>
        <br />
        <Text>Режим Секретаря включает в себя:</Text>
        <UnorderedList>
          <ListItem>Внесение в в базу данных поступающих заявок;</ListItem>
          <ListItem>Просмотр заявок в базе данных с возможностю сортировки по временным промежуткам.</ListItem>
        </UnorderedList>
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

        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            База данных:
          </Heading>
          <Box>
            <Code colorScheme="red">Microsoft Access</Code>
          </Box>
        </Stack>
      </Section>
    </Container>
  );
}

export default Zayavka;
