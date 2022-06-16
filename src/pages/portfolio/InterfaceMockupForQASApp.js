import React from 'react';
import { Container, Heading, Stack, Badge, Box, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel } from '@chakra-ui/react';

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';
import Carousel, { CarouselItem } from '../../components/Carousel';

import interfacemockupforqasapp_1_1 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_1_1.jpg';
import interfacemockupforqasapp_1_2 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_1_2.jpg';
import interfacemockupforqasapp_1_3 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_1_3.jpg';
import interfacemockupforqasapp_1_4 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_1_4.jpg';
import interfacemockupforqasapp_1_5 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_1_5.jpg';
import interfacemockupforqasapp_1_6 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_1_6.jpg';

import interfacemockupforqasapp_2_1 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_2_1.jpg';
import interfacemockupforqasapp_2_2 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_2_2.jpg';
import interfacemockupforqasapp_2_3 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_2_3.jpg';
import interfacemockupforqasapp_2_4 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_2_4.jpg';
import interfacemockupforqasapp_2_5 from '../../assets/portfolio/interfacemockupforqasapp/interfacemockupforqasapp_2_5.jpg';

function InterfaceMockupForQASApp() {
  return (
    <Container>
      <Section delay={0.1} mb={0}>
        <Stack direction="row">
          <Heading as="h3" fontSize={20} mb={4}>
            Макеты интерфейса для приложения оценки качества обслуживания
          </Heading>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Stack direction="row">
          <Badge colorScheme="blue">Adobe Photoshop</Badge>
          <Badge colorScheme="orange">adobe illustrator</Badge>
        </Stack>
      </Section>

      <Section delay={0.3}>
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Макет №1
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Carousel title={'Макет №1'}>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_1_1}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_1_2}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_1_3}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_1_4}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_1_5}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_1_6}></Box>
                </CarouselItem>
              </Carousel>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Макет №2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Carousel title={'Макет №2'}>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_2_1}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_2_2}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_2_3}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_2_4}></Box>
                </CarouselItem>
                <CarouselItem>
                  <Box className="carousel-item-image" backgroundImage={interfacemockupforqasapp_2_5}></Box>
                </CarouselItem>
              </Carousel>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section delay={0.4}>
        <Paragraph>
          Макеты разработаны в ходе проектирования приложения для оценки качества обслуживания, с учётом использования приложения на устройствах с сенсорным экраном.
        </Paragraph>
      </Section>
    </Container>
  );
}

export default InterfaceMockupForQASApp;
