import React, { useState } from 'react';
import { ChakraProvider, Container, Box, Link, Heading, Button, List, ListItem, Image, chakra, useColorModeValue, HStack, ScaleFade, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaGithub, FaTelegramPlane, FaEnvelope, FaCheck } from 'react-icons/fa';
import NavBar from './NavBar';
import { BioSection, BioYear } from '../components/BIO';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import theme from './Theme';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <NavBar />

        <Container maxW="container.sm" pt={24}>
          {/* Верхняя плашка */}
          <Box borderRadius="lg" mb={6} p={2} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
            Привет, я начинающий web-разработчик.
          </Box>

          {/* Профильная информация */}
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Гостев Денис
              </Heading>
              <p>JavaScript (React/Node.js/Rest API/MongoDB), Design (Photoshop/Illustrator)</p>
            </Box>
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
              <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
                <ProfileImage src="/gostev.dy.png" alt="Гостев Денис" borderRadius="full" width="100%" height="100%" />
              </Box>
            </Box>
          </Box>

          {/* Обо мне */}
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Обо мне
            </Heading>
            <Paragraph>
              Я — начинающий web-разработчик, мне интересна, как Frontend, так и Backend разработка. У меня есть желание и стремление стать квалифицированным программистом,
              разрабатывать web-сайты/сервисы. Со времён учёбы в школе увлекался компьютерными технологиями, уже тогда узнал, что такое HTML и CSS, в университете освоил .Net
              C#, с увлечением занимался разработкой проектов для курсовых работ, что в последствии дало возможность применить навыки в одной компании (успешно разработать,
              внедрить и поддерживать ПО для учёта талонов на питание). Также в процессе работы и в свободное время выполнял заказы на разработку несложных сайтов. С начала
              2021г. изучаю JavaScript в том числе стек M.E.R.N., уже разработаны успешно несколько дипломных работ на заказ и несколько небольших проектов для личных нужд,
              или по просьбе людей. В настоящее время нахожусь в поиске работы.
            </Paragraph>
            <Box align="center" my={10}>
              <Link href="/portfolio">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Моё портфолио
                </Button>
              </Link>
            </Box>
          </Section>

          {/* Карьера */}
          <Section delay={0.2}>
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
              Нахожусь в поиске работы на вакансию JavaScript Junior-разработчик
            </BioSection>
          </Section>

          {/* Контакты */}
          <Section delay={0.3} className="anchorContacts">
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
                    <Box bg="rgba(129, 230, 217, 0.25);" rounded="md" paddingLeft={4} paddingRight={4} paddingTop={2} paddingBottom={2}>
                      <HStack>
                        <Text fontWeight={600}>Скопировано! </Text>
                        <FaCheck color="green" />
                      </HStack>
                    </Box>
                  </ScaleFade>
                </HStack>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/gostev69" target="_blank">
                  <Button variant="ghost" colorScheme="teal" leftIcon={<FaTelegramPlane />}>
                    @gostev69
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/deniska69" target="_blank">
                  <Button variant="ghost" colorScheme="teal" leftIcon={<FaGithub />}>
                    @deniska69
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default Home;
