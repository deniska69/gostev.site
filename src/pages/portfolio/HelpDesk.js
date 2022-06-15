import React from 'react';
import { Container, Heading, useColorModeValue, Stack, Badge, HStack, Box, Text, Code, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';
import Carousel, { CarouselItem } from '../../components/Carousel';

import helpdesk_1 from '../../assets/portfolio/helpdesk/helpdesk_1.jpg';
import helpdesk_2 from '../../assets/portfolio/helpdesk/helpdesk_2.jpg';
import helpdesk_3 from '../../assets/portfolio/helpdesk/helpdesk_3.jpg';
import helpdesk_4 from '../../assets/portfolio/helpdesk/helpdesk_4.jpg';

function HelpDesk() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Web-Приложение "Help Desk"
          </Heading>
          <a href="https://github.com/deniska69/Help-Desk" target="_blank" rel="noreferrer">
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
          <Badge colorScheme="teal">SQLite</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel title={'Web-Приложение "Help Desk"'}>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={helpdesk_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={helpdesk_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={helpdesk_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={helpdesk_4}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          Help Desk - Web-Приложение разработанное в ходе выполнения курсовой работы. Задачей приложения является автоматизация процесса подачи и учёта заявок в IT-отдел.
        </Paragraph>
        <br />
        <Text>Режим Администратора включает в себя:</Text>
        <UnorderedList>
          <ListItem>Добавление/изменение/удаление отделов &#62; сотрудников-пользователей, корпусов &#62; кабинетов/аудиторий.</ListItem>
        </UnorderedList>
        <br />
        <Text>Режим Ползователя включает в себя:</Text>
        <UnorderedList>
          <ListItem>Подача заявки;</ListItem>
          <ListItem>Просмотр статуса поданных заявок.</ListItem>
        </UnorderedList>
        <br />
        <Text>Режим Пользователя IT-отдела включает в себя:</Text>
        <UnorderedList>
          <ListItem>Просмотр поданных заявок;</ListItem>
          <ListItem>Изменение статуса поданных заявок.</ListItem>
        </UnorderedList>
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
            <Code colorScheme="teal">SQLite</Code>
          </Box>
        </Stack>
      </Section>
    </Container>
  );
}

export default HelpDesk;
