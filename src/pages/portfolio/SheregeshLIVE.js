import React from 'react';
import {
  Container,
  Heading,
  Stack,
  Badge,
  HStack,
  Box,
  Text,
  Code,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';
import Carousel, { CarouselItem } from '../../components/Carousel';

import sheregeshlive_site_1 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_1.jpg';
import sheregeshlive_site_2 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_2.jpg';
import sheregeshlive_site_3 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_3.jpg';
import sheregeshlive_site_4 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_4.jpg';
import sheregeshlive_site_5 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_5.jpg';
import sheregeshlive_site_6 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_6.jpg';
import sheregeshlive_site_7 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_7.jpg';
import sheregeshlive_site_8 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_8.jpg';
import sheregeshlive_site_9 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_9.jpg';
import sheregeshlive_site_10 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_10.jpg';
import sheregeshlive_site_11 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_11.jpg';
import sheregeshlive_site_12 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_12.jpg';
import sheregeshlive_site_13 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_13.jpg';
import sheregeshlive_site_14 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_14.jpg';
import sheregeshlive_site_15 from '../../assets/portfolio/sheregeshlive/site/sheregeshlive_site_15.jpg';

import sheregeshlive_cabinet_1 from '../../assets/portfolio/sheregeshlive/cabinet/sheregeshlive_cabinet_1.jpg';
import sheregeshlive_cabinet_2 from '../../assets/portfolio/sheregeshlive/cabinet/sheregeshlive_cabinet_2.jpg';
import sheregeshlive_cabinet_3 from '../../assets/portfolio/sheregeshlive/cabinet/sheregeshlive_cabinet_3.jpg';

import sheregeshlive_adminpanel_1 from '../../assets/portfolio/sheregeshlive/adminpanel/sheregeshlive_adminpanel_1.jpg';
import sheregeshlive_adminpanel_2 from '../../assets/portfolio/sheregeshlive/adminpanel/sheregeshlive_adminpanel_2.jpg';

function SheregeshLIVE() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container maxW="xl">
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Шерегеш LIVE
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
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Сайт
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Carousel title={'Основные разделы сайта'}>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_1}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_2}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_3}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_4}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_5}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_6}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_7}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_8}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_9}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_10}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_11}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_12}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_13}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_14}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_site_15}></Box>
                </CarouselItem>
              </Carousel>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Личный кабинет
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Carousel title={'Личный кабинет'}>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_cabinet_1}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_cabinet_2}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_cabinet_3}></Box>
                </CarouselItem>
              </Carousel>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Панель Администратора
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Carousel title={'Панель администратор'}>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_adminpanel_1}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={sheregeshlive_adminpanel_2}></Box>
                </CarouselItem>
              </Carousel>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          Шерегеш LIVE - Сайт, разрабатываемый с весны 2021г. в ходе изучения библиотеки для создания Web-приложений - React. Для покрытия всех задач возникавших в процессе
          разработки - был выбран стек "M.E.R.N.". Выбор данного набора технологий был обоснован доступностью обучающих материалов.
        </Paragraph>
        <br />
        <Heading as="h5" fontSize={20} mb={4}>
          В ходе разработки сайта были реализованы следующие задачи:
        </Heading>
        <UnorderedList>
          <ListItem>Основные возможности библиотеки React в том числе отображение разработанных компонентов без перезагрузки страницы сайта в браузере;</ListItem>
          <ListItem>Отправка и обработка HTTP-запросов между клиентской и серверной частями сайта;</ListItem>
          <ListItem>Взаимодествие с документоориентированной системой управления базами данных - MongoDB;</ListItem>
          <ListItem>Регистрация пользователей и шифрование паролей для хранения их в базе данных в шифрованном виде;</ListItem>
          <ListItem>Авторизация пользователей и поддержка активной сессии по JWT-токену;</ListItem>
          <ListItem>Подбор апартаментов в отелях по заданным параметрам;</ListItem>
          <ListItem>Отправка запроса на бронирование апартаментов пользователем;</ListItem>
          <ListItem>Отправка эл.писем пользователю об регистрации запроса на бронирование апартаментов, а также об изменении статуса бронирования;</ListItem>
          <ListItem>Отправка эл.письма менеджеру отеля с уникальной ссылкой на страницу подтверждения/отклонения запроса на бронирование апартаментов;</ListItem>
          <ListItem>Отображение статуса активных запросов на бронирование апартаментов в личном кабинете пользователя;</ListItem>
          <ListItem>Отображение истории бронирования апартаментов в личном кабинете пользователя;</ListItem>
          <ListItem>Форма обратной связи;</ListItem>
          <ListItem>Загрузка изображений на сервер, получение прямых URL для отображения на сайте;</ListItem>
          <ListItem>Отображение карточки отеля со всеми данными;</ListItem>
          <ListItem>
            Отображение текущей погоды в п.Шерегеш путём запроса к API{' '}
            <a className="_customURL" href="https://openweathermap.org/" target="_blank" rel="noreferrer">
              OpenWeather
            </a>
            .
          </ListItem>
        </UnorderedList>
        <br />

        <Heading as="h5" fontSize={20} mb={4}>
          Также для сайта разрабывается панель администратора, решающая следующие задачи:
        </Heading>
        <UnorderedList>
          <ListItem>Добавление/блокировка/редактирование пользователей/менеджеров отелей;</ListItem>
          <ListItem>Добавление/редактирование отелей;</ListItem>
          <ListItem>Добавление/редактирование апартаментов для добавленных отелей;</ListItem>
          <ListItem>Добавление/редактирование новостей (отображающихся на странице "Новости");</ListItem>
          <ListItem>Добавление/редактирование мероприятий (отображающихся на странице "Мероприятия").</ListItem>
        </UnorderedList>
        <br />

        <Heading as="h5" fontSize={20} mb={4}>
          Цели на доработку сайта:
        </Heading>
        <UnorderedList>
          <ListItem>Расширить модель Новостей и доработать панель админстратора для редактирования и вывода на сайт дополнительных полей;</ListItem>
          <ListItem>Расширить модель Мероприятий и доработать панель админстратора для редактирования и вывода на сайт дополнительных полей;</ListItem>
          <ListItem>
            Разработать Панель Менеджера по аналогии Панели Администратора, с возможностью редактирования данных отелей и их апартаментов, доступ к которым есть у менеджера
            отеля.
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.5}>
        <Text>Проект разработывается при помощи набора технологий "M.E.R.N", в состав которого входит:</Text>
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
            - HTTP-клиент для Node.js, для выполнения HTTP-запросов на стороне сервера и XMLHttpRequests-запросов на стороне клиента (браузера).
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
          <ListItem>
            <b>
              <a className="_customURL" href="https://xdsoft.net/jodit/" target="_blank" rel="noreferrer">
                Jodit
              </a>
            </b>{' '}
            - WYSIWYG-редактор с открытым исходным кодом.
          </ListItem>
          <ListItem>
            <b>
              <a className="_customURL" href="https://www.npmjs.com/package/react-toastify" target="_blank" rel="noreferrer">
                React-Toastify
              </a>
            </b>{' '}
            - Библиотека для вывода всплывающих уведомлений.
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

export default SheregeshLIVE;
