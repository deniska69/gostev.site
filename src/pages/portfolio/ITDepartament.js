import React from 'react';
import { Container, Heading, Stack, Badge, Box, Code } from '@chakra-ui/react';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';
import Carousel, { CarouselItem } from '../../components/Carousel';

import itdepartament_1 from '../../assets/portfolio/itdepartament/itdepartament_1.jpg';
import itdepartament_2 from '../../assets/portfolio/itdepartament/itdepartament_2.jpg';
import itdepartament_3 from '../../assets/portfolio/itdepartament/itdepartament_3.jpg';
import itdepartament_4 from '../../assets/portfolio/itdepartament/itdepartament_4.jpg';

function ITDepartament() {
  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Сервис подачи заявок в IT-Отдел
          </Heading>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="facebook">HTML</Badge>
          <Badge colorScheme="blue">CSS</Badge>
          <Badge colorScheme="purple">Bootstrap</Badge>
          <Badge colorScheme="messenger">JQuery</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel title={'Сервис подачи заявок в IT-Отдел'}>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={itdepartament_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={itdepartament_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={itdepartament_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={itdepartament_4}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>Сервис разработан в ходе автоматизации процесса подачи заявок в IT-Отдел (для использования внутри компании).</Paragraph>
        <Paragraph>
          На сайте доступно для выбора 4 раздела соответствующие отделам IT-Дирекции, с подкатегориями видов заявок (с заготовленными шаблонами данных). При выборе необходимой
          категории и заполнения шаблона, при помощи скрипта на jQuery формировалось эл.письмо в Microsoft Outlook, дальнейшая обработка которого происходило в 1С:ITIL.
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="messenger">JQuery</Code>
          </Box>
        </Stack>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            CSS-Фреймворк:
          </Heading>
          <Box>
            <Code colorScheme="purple">Bootstrap</Code>
          </Box>
        </Stack>
      </Section>
    </Container>
  );
}

export default ITDepartament;
