import { Box, Text, LinkBox, Image, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Link to={`${id}`} variant="hover-no">
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" borderRadius="lg" />
        <Text mt={2} fontSize={20} color={useColorModeValue('black', 'white')}>
          {title}
        </Text>
        <Text fontSize={14} color={useColorModeValue('black', 'white')}>
          {children}
        </Text>
      </LinkBox>
    </Link>
  </Box>
);
