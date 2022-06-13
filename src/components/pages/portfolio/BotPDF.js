import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Paragraph from '../../Paragraph';

function BotPDF() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Приложение-скрипт "Bot-PDF"
          </Heading>
          <a href="https://github.com/deniska69/Bot-PDF" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub color={colorGitHub} />
              <Text color={colorGitHub}>GitHub</Text>
            </HStack>
          </a>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="blue">AutoIt</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Paragraph>
          Bot-PDF - Приложение-срипт разработанное в ходе автоматизации рутинной работы. Задачей приложения является автоматизация перебора множества .pdf-файлов, с открытием
          документа, установкой на него электронной подписи с последующим сохраненим, зарытие и открытием следующего файла (при наличии такого в папке).
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="blue">AutoIt*</Code>
          </Box>
        </Stack>
      </Section>

      <Section delay={0.5}>
        <Paragraph>
          * AutoIt — свободно распространяемый язык для автоматизации выполнения задач в Microsoft Windows. Позволяет создавать скрипты автоматизации (иногда называемые
          макросами), способные имитировать действия пользователя, такие как текстовый ввод и воздействия на элементы управления системы и программ, а также реагировать на
          события (например, выполнять определённые действия при открытии окна с определённым заголовком). Такие скрипты полезны для выполнения часто повторяющихся задач,
          таких как инсталляция идентичных наборов программ на большое количество компьютеров.
        </Paragraph>
      </Section>
    </Container>
  );
}

export default BotPDF;
