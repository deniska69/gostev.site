import React from 'react';
import { Container, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import Section from '../Section';
import { WorkGridItem } from '../GridItem';

import thumbBotPDF from '../../assets/portfolio/botpdf_thumb.jpg';
import thumbHelpDesk from '../../assets/portfolio/helpdesk_thumb.jpg';
import thumbZayavka from '../../assets/portfolio/zayavka_thumb.jpg';
import thumbINote from '../../assets/portfolio/inote_thumb.jpg';
import thumbGTR from '../../assets/portfolio/gametetrisrace_thumb.jpg';
import thumbESR from '../../assets/portfolio/extremesubaruracing_thumb.jpg';

function Portfolio() {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Старые проекты
      </Heading>
      <Divider my={6} marginBottom="1rem" />

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="BotPDF" title="BotPDF" thumbnail={thumbBotPDF}>
            Скрипт для автоматизации рутинной работы
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="HelpDesk" title="HelpDesk" thumbnail={thumbHelpDesk}>
            Курсовая работа на тему "Автоматизация учёта заявок в IT-отделе"
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="Zayavka" title="Zayavka" thumbnail={thumbZayavka}>
            Курсовая работа на тему "Автоматизация учёта заявок в IT-отделе"
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="INote" title="INote" thumbnail={thumbINote}>
            Курсовая работа на тему "Изучение технологии API"
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="GameTetrisrace" title="GameTetrisrace" thumbnail={thumbGTR}>
            Курсовая работа на тему "Компьютерная игра"
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ExtremeSubaruRacing" title="ExtremeSubaruRacing" thumbnail={thumbESR}>
            Курсовая работа на тему "Компьютерная игра"
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;
