import React from 'react';
import { Container, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import Section from '../Section';
import { WorkGridItem } from '../GridItem';

import thumbGostevSite from '../../assets/portfolio/gostevsite_tumb.jpg';
import thumbSheregeshLive from '../../assets/portfolio/sheregeshlive_thumb.jpg';

import thumbBotPDF from '../../assets/portfolio/botpdf_thumb.jpg';
import thumbHelpDesk from '../../assets/portfolio/helpdesk_thumb.jpg';
import thumbZayavka from '../../assets/portfolio/zayavka_thumb.jpg';
import thumbINote from '../../assets/portfolio/inote_thumb.jpg';
import thumbGTR from '../../assets/portfolio/gametetrisrace_thumb.jpg';
import thumbESR from '../../assets/portfolio/extremesubaruracing_thumb.jpg';

function Portfolio() {
  return (
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          Проекты
        </Heading>
        <Divider my={6} marginBottom="1rem" />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="gostevSite" title="www.gostev.site" thumbnail={thumbGostevSite}>
            Личный сайт-портфолио
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="SheregeshLive" title="Шерегеш LIVE" thumbnail={thumbSheregeshLive}>
            Сайт о горнолыжном курорте "Шерегеш" с возможностью бронирования отелей
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4}>
          Старые проекты
        </Heading>
        <Divider my={6} marginBottom="1rem" />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem id="BotPDF" title="BotPDF" thumbnail={thumbBotPDF}>
            Скрипт для автоматизации рутинной работы
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="HelpDesk" title="HelpDesk" thumbnail={thumbHelpDesk}>
            Курсовая работа на тему "Автоматизация учёта заявок в IT-отделе"
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="Zayavka" title="Zayavka" thumbnail={thumbZayavka}>
            Курсовая работа на тему "Автоматизация учёта заявок в IT-отделе"
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="iNote" title="iNote" thumbnail={thumbINote}>
            Курсовая работа на тему "Изучение технологии API"
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="GameTetrisRace" title="Game Tetris Race" thumbnail={thumbGTR}>
            Курсовая работа на тему "Компьютерная игра"
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="ExtremeSubaruRacing" title="Extreme Subaru Racing" thumbnail={thumbESR}>
            Курсовая работа на тему "Компьютерная игра"
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;
