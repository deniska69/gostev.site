import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Carousel, { CarouselItem } from '../../Carousel';

import claimsection_1 from '../../../assets/portfolio/claimsection/claimsection_1.jpg';
import claimsection_2 from '../../../assets/portfolio/claimsection/claimsection_2.jpg';
import claimsection_3 from '../../../assets/portfolio/claimsection/claimsection_3.jpg';
import claimsection_4 from '../../../assets/portfolio/claimsection/claimsection_4.jpg';

function ClaimSection() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Претензионный раздел
          </Heading>
          <a href="https://github.com/deniska69/Claim-Section" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub color={colorGitHub} />
              <Text color={colorGitHub}>GitHub</Text>
            </HStack>
          </a>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="facebook">HTML</Badge>
          <Badge colorScheme="blue">CSS</Badge>
          <Badge colorScheme="purple">Bootstrap</Badge>
          <Badge colorScheme="orange">JavaScript</Badge>
          <Badge colorScheme="green">MongoDB</Badge>
          <Badge colorScheme="facebook">Express</Badge>
          <Badge colorScheme="blue">React</Badge>
          <Badge colorScheme="green">Node.js</Badge>
          <Badge colorScheme="blue">Rest API</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={claimsection_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={claimsection_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={claimsection_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={claimsection_4}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Text>Претензионный раздел решает следующие задачи:</Text>
        <br />
        <UnorderedList>
          <ListItem>Подача пользователем претензии в организацию с вложением (без авторизации на сайте);</ListItem>
          <ListItem>Отправка пользователю на эл.почту уникальной ссылки на отчёт (для просмотра без авторизации);</ListItem>
          <ListItem>Уведомление пользователя об изменениях в отчёте о претензии;</ListItem>
          <ListItem>Просмотр/изменение Администратором поданных претензий;</ListItem>
          <ListItem>Уведомление Администратора о новых поступивших претензиях.</ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.5}>
        <Text>Проект разработан при помощи набора технологий "M.E.R.N", в состав которого входит:</Text>
        <UnorderedList>
          <ListItem>
            <b>
              <a className="_customURL" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                MongoDB
              </a>
            </b>{' '}
            - документоориентированная система управления базами данных, не требующая описания схемы таблиц.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://expressjs.com/" target="_blank" rel="noreferrer">
                Express
              </a>
            </b>{' '}
            - веб-фреймворк для приложений Node.js, предоставляющий обширный набор функций для мобильных и веб-приложений.
          </ListItem>
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
              <a className="_customURL" href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                Node.js
              </a>
            </b>{' '}
            - Программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.6}>
        <Text>Дополнительные технологии использовнные для разработки проекта:</Text>
        <UnorderedList>
          <ListItem>
            <b>
              <a className="_customURL" href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                Bootstrap
              </a>
            </b>{' '}
            - Свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток,
            блоков навигации и прочих компонентов веб-интерфейса, включая JavaScript-расширения.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://axios-http.com/" target="_blank" rel="noreferrer">
                Axios
              </a>
            </b>{' '}
            - HTTP-клиент для Node.js, для выполнения HTTP-запросов на стороне сервера и XMLHttpRequests-запрос на стороне клиента (браузера).
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://redux.js.org/" target="_blank" rel="noreferrer">
                Redux
              </a>
            </b>{' '}
            - Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://www.google.com/recaptcha/about/" target="_blank" rel="noreferrer">
                Google ReCAPTCHA
              </a>
            </b>{' '}
            - Система для защиты веб-сайтов от интернет-ботов.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer">
                jsonwebtoken
              </a>
            </b>{' '}
            - Библиотека для создания и управления токенами доступа по открытому стандарту{' '}
            <a className="_customURL" href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank" rel="noreferrer">
              RFC 7519
            </a>
            .
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://www.npmjs.com/package/bcryptjs" target="_blank" rel="noreferrer">
                bcrypt.js
              </a>
            </b>{' '}
            - Библиотека для хэширования и шифрования данных.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://nodemailer.com/about/" target="_blank" rel="noreferrer">
                Nodemailer
              </a>
            </b>{' '}
            - Библиотека для отправки электронных писем.
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.7}>
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

export default ClaimSection;
