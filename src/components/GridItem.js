// eslint-disable-next-line
import { Box, Text, LinkBox, LinkOverlay, Link, Image, useColorModeValue } from '@chakra-ui/react';
// import { Global } from '@emotion/react';

// export const GridItem = ({ children, href, title, thumbnail }) => (
//   <Box w="100%" textAlign="center">
//     <LinkBox cursor="pointer">
//       <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
//       <LinkOverlay href={href} target="_blank">
//         <Text mt={2}>{title}</Text>
//       </LinkOverlay>
//       <Text fontSize={14}>{children}</Text>
//     </LinkBox>
//   </Box>
// );

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Link href={`/portfolio/${id}`} variant="hover-no">
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

// export const GridItemStyle = () => (
//   <Global
//     styles={`
//       .grid-item-thumbnail {
//         border-radius: 12px;
//       }
//     `}
//   />
// );
