import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Box, Heading, Button, List, ListItem, Image, chakra, useColorModeValue, HStack, ScaleFade, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaCheck, FaLinkedin } from 'react-icons/fa';

import { BioSection, BioYear } from '../components/BIO';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import AvatarPhoto from '../assets/home/gostev.dy.png';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
});

function Home() {
  const [isShowFadeCopy, setIsShowFadeCopy] = useState(false); //Переменная для хранения состояния отображения плашки о том, что Email был скопирован

  //Функция отображения и скрытия плашки о том, что Email был скопирован
  function fadeCopy() {
    setIsShowFadeCopy(!isShowFadeCopy);
    setTimeout(() => {
      setIsShowFadeCopy(isShowFadeCopy);
    }, 1500);
  }

  //Цвета фона плашки о том, что Email был скопирован
  const bgFadeCopy = useColorModeValue('#E6FFFA;', 'rgba(129, 230, 217, 0.12)');

  //Цвета текста на плашке о том, что Email был скопирован
  const colorTextFadeCopy = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container maxW="xl">
      {/* Верхняя плашка */}
      <Section delay={0.1}>
        <Box borderRadius="lg" mb={6} p={2} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
          Привет, я начинающий web-разработчик.
        </Box>
      </Section>

      {/* Профильная информация #1 */}
      <Section delay={0.2}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Гостев Денис
            </Heading>
            <Text fontSize="sm">JavaScript (React/Node.js/Express/Rest API/MongoDB/SQL)</Text>
            <Text fontSize="sm">Design (Photoshop/Illustrator)</Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
            <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
              <ProfileImage src={AvatarPhoto} alt="Гостев Денис" borderRadius="full" width="100%" height="100%" />
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Обо мне */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Обо мне
        </Heading>
        <Paragraph>
          Я — начинающий web-разработчик, мне интересна, как Frontend, так и Backend разработка. У меня есть желание и стремление стать квалифицированным программистом,
          разрабатывать web-сайты/сервисы. Со времён учёбы в школе увлекаюсь компьютерными технологиями, уже тогда узнал, что такое HTML и CSS, в университете с увлечением
          занимался разработкой проектов для курсовых работ на языке программирования .Net C#, параллельно изучая верстку сайтов с использованим CSS-Фреймворка Bootstrap. В
          процессе обучения выполнял заказы на разработку сайтов-лендингов. С начала 2021г. изучаю JavaScript в том числе стек M.E.R.N., успешно разработаны несколько проектов
          на заказ. В настоящее время нахожусь в поиске работы.
        </Paragraph>
        <Box align="center" my={10}>
          <Link to="portfolio" variant="hover-no">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Моё портфолио
            </Button>
          </Link>
        </Box>
      </Section>

      {/* Карьера */}
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Карьера
        </Heading>
        <BioSection>
          <BioYear>2013</BioYear>
          МБОУ СОШ №15 пгт. Мундыбаш (11 классов)
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Новокузнецкий институт, филиал Кемеровского государственного университета, г.Новокузнецк (Высшее образование (Бакалавр) - Факультет информационных технологий,
          Автоматизированные системы управления)
        </BioSection>
        <BioSection>
          <BioYear>2014 - 2022</BioYear>
          Работаю на должностях, косвенно связанных с разработкой
        </BioSection>
        <BioSection>
          <BioYear>2022 по настоящее время</BioYear>
          Нахожусь в поиске работы на вакансию Junior JavaScript-разработчик
        </BioSection>
      </Section>

      {/* Контакты */}
      <Section delay={0.5} className="anchorContacts">
        <Heading as="h3" variant="section-title">
          Контакты
        </Heading>
        <List>
          <ListItem>
            <HStack>
              <CopyToClipboard text={'gostev.dy@yandex.ru'}>
                <Button variant="ghost" colorScheme="teal" leftIcon={<FaEnvelope />} onClick={fadeCopy}>
                  gostev.dy@yandex.ru
                </Button>
              </CopyToClipboard>
              <ScaleFade initialScale={0.9} in={isShowFadeCopy}>
                <Box bg={bgFadeCopy} rounded="md" paddingLeft={4} paddingRight={4} paddingTop={2} paddingBottom={2} display={{ base: 'none', sm: 'flex' }}>
                  <HStack>
                    <Text fontWeight={600} color={colorTextFadeCopy}>
                      Скопировано!{' '}
                    </Text>
                    <FaCheck color="green" />
                  </HStack>
                </Box>
                <Box bg={bgFadeCopy} rounded="md" paddingLeft={2} paddingRight={2} paddingTop={2} paddingBottom={2} display={{ base: 'flex', sm: 'none' }}>
                  <HStack>
                    <Text color={colorTextFadeCopy}>Скопировано!</Text>
                  </HStack>
                </Box>
              </ScaleFade>
            </HStack>
          </ListItem>
          <ListItem>
            <a href="https://t.me/gostev69" target="_blank" variant="hover-no" rel="noreferrer">
              <Button variant="ghost" colorScheme="teal" leftIcon={<FaTelegramPlane />}>
                @gostev69
              </Button>
            </a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/deniska69" target="_blank" variant="hover-no" rel="noreferrer">
              <Button variant="ghost" colorScheme="teal" leftIcon={<FaGithub />}>
                @deniska69
              </Button>
            </a>
          </ListItem>
          {/* <ListItem>
            <a href="https://career.habr.com/gostevdy" target="_blank" variant="hover-no" rel="noreferrer">
              <Button variant="ghost" colorScheme="teal">
                <Image src={IconHabr} />
                Хабр Карьера
              </Button>
            </a>
          </ListItem> */}
          <ListItem>
            <a href="https://www.linkedin.com/in/gostev69/" target="_blank" variant="hover-no" rel="noreferrer">
              <Button variant="ghost" colorScheme="teal" leftIcon={<FaLinkedin />}>
                LinkedIn
              </Button>
            </a>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export default Home;
