import React from 'react';
import { Container, Heading, Stack, Badge, HStack, Box, Text, Code, useColorModeValue, Image } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import Section from '../../Section';
import Paragraph from '../../Paragraph';
import Carousel, { CarouselItem } from '../../Carousel';

import './SimpleRegionLinkEditor.css';

import simpleregionlinkeditor_1 from '../../../assets/portfolio/simpleregionlinkeditor/simpleregionlinkeditor_1.jpg';
import simpleregionlinkeditor_2 from '../../../assets/portfolio/simpleregionlinkeditor/simpleregionlinkeditor_2.jpg';
import simpleregionlinkeditor_3 from '../../../assets/portfolio/simpleregionlinkeditor/simpleregionlinkeditor_3.jpg';
import simpleregionlinkeditor_4 from '../../../assets/portfolio/simpleregionlinkeditor/simpleregionlinkeditor_4.jpg';
import simpleregionlinkeditor_5 from '../../../assets/portfolio/simpleregionlinkeditor/simpleregionlinkeditor_5.jpg';

function SimpleRegionLinkEditor() {
  const colorGitHub = useColorModeValue('rgb(44, 122, 123)', 'rgb(129, 230, 217)');

  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Web-приложение "Simple Region Link Editor"
          </Heading>
          <a href="https://github.com/deniska69/Simple-Region-Link-Editor" target="_blank" rel="noreferrer">
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
          <Badge colorScheme="orange">JavaScript</Badge>
          <Badge colorScheme="purple">Bootstrap</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Carousel title={'Web-приложение "Simple Region Link Editor"'}>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={simpleregionlinkeditor_1}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={simpleregionlinkeditor_2}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={simpleregionlinkeditor_3}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={simpleregionlinkeditor_4}></Box>
          </CarouselItem>
          <CarouselItem>
            <Box className="carousel-item-image" backgroundImage={simpleregionlinkeditor_5}></Box>
          </CarouselItem>
        </Carousel>
      </Section>

      <Section delay={0.4}>
        <Paragraph>Simple Region Link Editor - Web-Приложение разработанное для автоматизации процесса создания ссылок-областей.</Paragraph>
        <br />
        <Paragraph>
          Работа с приложением подробно описана на странице репозитория проекта на{' '}
          <a className="_customURL" href="https://github.com/deniska69/Simple-Region-Link-Editor" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h4" fontSize={20} mb={4}>
          Пример результата работы приложения:
        </Heading>
        <Box>
          {/* eslint-disable-next-line  */}
          <div className="srleGroupUrlsAndImg">
            {/* eslint-disable-next-line  */}
            <Image className="srleImg" src="https://i4.imageban.ru/out/2022/06/13/92e0e049ded03e5d6b8674ac71176743.jpg" />

            {/* eslint-disable-next-line  */}
            <a
              id="srle1"
              href="https://market.yandex.ru/product--nabor-bokalov-dlia-shampanskogo-tulipa-170-ml-6-sht/1455975312?cpc=hqYMWPRsehAzik4sHBRUuI2629wEGMot62URJN5tLe9Z6FsdDIISnMx4Utn8OVegFUf9SFedH4RJfjEr4QXZkVzfpyImt08NeX-zYz938HHtzp2KW-wJH7lK_MVAUI-iApn92icdJGl0yUJFpIm_hwCMrWgohry3tg6TKf7Kxws-JgNr6ataHHXu9rvEHQfa&amp;sku=101470643389&amp;from=premiumOffers&amp;from-show-uid=16551135853621153997000001&amp;do-waremd5=IiV4hVSDMRxVz8tiKaLlfA&amp;sponsored=1"
              target="_blank"
              title="Бокал"
              rel="noreferrer"></a>

            {/* eslint-disable-next-line  */}
            <a
              id="srle2"
              href="https://market.yandex.ru/product--luminarc-tarelka-obedennaia-trianon-24-5-sm/514613004?cpc=45g7GKZm4lb7uLqI42INuEE2pgcfFgLn7176ZbyIwxVvEcuJDNqXFn-hNGIc0t9zciUgTUU454VHUXIeiPykVShW_pWgCzV91tdZpPSYa4VWGF9ZLmTgRt64OtnaJ29x8Dt6I0vqwGZm2K6HMn-svgn5Mj-FYKgUayhTEJBF4SbqKhIESSHuy1APrJAeKd9_&amp;rs=eJwBLADT_zIqIh8KDtGC0LDRgNC10LvQutCwENrMjQoiBAgAEAcoAGoAUAF6BQjIzvoFq9QRhQ%2C%2C&amp;sku=100718004750&amp;do-waremd5=qefZS_NWF5vzh1d8n7u_JA&amp;cpa=1&amp;nid=28560297"
              target="_blank"
              title="Тарелка"
              rel="noreferrer"></a>

            {/* eslint-disable-next-line  */}
            <a
              id="srle3"
              href="https://market.yandex.ru/product--koltso-dlia-salfetki-marokko-tsvet-zoloto-4-8kh3-sm-5087794/1441362164?text=%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%BB%D1%84%D0%B5%D1%82%D0%BE%D0%BA&amp;cpc=5323NYv1aenWVez5wA7ntRoTV-CSDNmZ2RW5vwSXSm0WMIdIlEVfA_Iofdlw8sBct3BCrvmR-hVIq_kXlInxfnK9tG3AfPHc-xT149qh8mdYUMqPlI01TuDXkxgwuSl7cH1Gv8NThTTJdk3GOb7y7GIvwH-xuBkDCaKHmraVongRKQMXGs2CsGUhIKq1yZV6&amp;rs=eJwzclAy5VK5sOvCvgu7L_ZcbLuwT-HCFiCzX-Fi44UNQEbLha0Xm4CyuwRunenlUmLhYBAQ1mDIYghgrGLlaPl3hRkAunwgjw%2C%2C&amp;sku=101451132650&amp;do-waremd5=9tdNbHvFtN_dR-1hFbgHgg&amp;cpa=1&amp;nid=56284"
              target="_blank"
              title="Кольцо"
              rel="noreferrer"></a>
          </div>
        </Box>
      </Section>

      <Section delay={0.6}>
        <Stack direction="row">
          <Heading as="h4" fontSize={20} mb={4}>
            Язык разработки:
          </Heading>
          <Box>
            <Code colorScheme="orange">JavaScript</Code>
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

export default SimpleRegionLinkEditor;
