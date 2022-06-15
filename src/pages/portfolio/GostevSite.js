import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';

function GostevSite() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Мой сайт-портфолио
          </Heading>
          <a href="https://github.com/deniska69/gostev.site" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub color={colorGitHub} />
              <Text color={colorGitHub}>GitHub</Text>
            </HStack>
          </a>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="orange">JavaScript</Badge>
          <Badge colorScheme="blue">React</Badge>
          <Badge colorScheme="teal">Chakra UI</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Paragraph>
          Сайт-портфолио разработан для наглядной демонстрации моих навыков в Web-разработке. В разделе Портфолио доступны проекты, разработаные в процессе изучения языка
          программирования JavaScript, а также проекты, разработанные в ходе изучения языков Python и C#.
        </Paragraph>
        <Paragraph>
          В ходе реализации сайта-портфолио были применены навыки разработки Web-приложений на фреймворке "React", была изучена и применена библиотека компонентов "Chakra UI".
        </Paragraph>
        <Paragraph>
          Для развёртывания сайта в публичный доступ были выполнены шаги, подробно описанные в описании репозитория проекта на{' '}
          <a className="_customURL" href="https://github.com/deniska69/gostev.site" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </Paragraph>
        <Paragraph>
          Также, в ходе разработки была применена технология{' '}
          <a className="_customURL" href="https://github.com/features/actions" target="_blank" rel="noreferrer">
            GitHub Actions
          </a>
          , что сильно облегчила постоянный{' '}
          <a className="_customURL" href="https://github.com/deniska69/gostev.site/blob/main/.github/workflows/deploy.yml" target="_blank" rel="noreferrer">
            процесс обновления файлов
          </a>{' '}
          проекта на хостинг-сервере.
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Text>Проект разработан при помощи следующих технологий:</Text>
        <UnorderedList>
          <ListItem>
            <b>
              <a className="_customURL" href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React
              </a>
            </b>{' '}
            - JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
                Chakra UI
              </a>
            </b>{' '}
            - Библиотека компонентов для React-приложений.
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.5}>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="orange">JavaScript</Code>
          </Box>
        </Stack>
      </Section>
    </Container>
  );
}

export default GostevSite;
