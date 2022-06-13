import React from 'react';
import { Container, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import Section from '../Section';
import { WorkGridItem } from '../GridItem';

import thumbGostevSite from '../../assets/portfolio/gostevsite.jpg';
import thumbSheregeshLive from '../../assets/portfolio/sheregeshlive.jpg';
import thumbSimpleRegionLinkEditor from '../../assets/portfolio/simpleregionlinkeditor.jpg';
import thumbClaimSection from '../../assets/portfolio/claimsection.jpg';

import thumbMSC15 from '../../assets/portfolio/msc15.jpg';
import thumbBotPDF from '../../assets/portfolio/botpdf.jpg';
import thumbHelpDesk from '../../assets/portfolio/helpdesk.jpg';
import thumbZayavka from '../../assets/portfolio/zayavka.jpg';
import thumbINote from '../../assets/portfolio/inote.jpg';
import thumbGTR from '../../assets/portfolio/gametetrisrace.jpg';
import thumbESR from '../../assets/portfolio/extremesubaruracing.jpg';

function Portfolio() {
  return (
    <Container maxW="xl">
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          Проекты
        </Heading>
        <Divider my={6} marginBottom="1rem" />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="gostevSite" title="Сайт-Портфолио" thumbnail={thumbGostevSite}>
            Мой личный сайт-портфолио
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="SheregeshLive" title="Шерегеш LIVE" thumbnail={thumbSheregeshLive}>
            Сайт о горнолыжном курорте "Шерегеш" с возможностью бронирования отелей
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="SimpleRegionLinkEditor" title="Simple Region Link Editor" thumbnail={thumbSimpleRegionLinkEditor}>
            Web-Приложение для автоматизации процесса создания ссылок-областей
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="ClaimSection" title="Претензионный раздел" thumbnail={thumbClaimSection}>
            Модуль для подачи/управления претензиями
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Heading as="h3" fontSize={20} mb={4}>
          Старые проекты
        </Heading>
        <Divider my={6} marginBottom="1rem" />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="MSC15" title={`МБОУ "СОШ №15"`} thumbnail={thumbMSC15}>
            Сайт для школы
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="BotPDF" title="BotPDF" thumbnail={thumbBotPDF}>
            Скрипт для автоматизации рутинной работы
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="HelpDesk" title="HelpDesk" thumbnail={thumbHelpDesk}>
            Курсовая работа на тему "Автоматизация учёта заявок в IT-отделе"
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="Zayavka" title="Zayavka" thumbnail={thumbZayavka}>
            Курсовая работа на тему "Автоматизация учёта заявок в IT-отделе"
          </WorkGridItem>
        </Section>

        <Section delay={0.7}>
          <WorkGridItem id="iNote" title="iNote" thumbnail={thumbINote}>
            Курсовая работа на тему "Изучение технологии API"
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem id="GameTetrisRace" title="Game Tetris Race" thumbnail={thumbGTR}>
            Курсовая работа на тему "Компьютерная игра"
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem id="ExtremeSubaruRacing" title="Extreme Subaru Racing" thumbnail={thumbESR}>
            Курсовая работа на тему "Компьютерная игра"
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;
