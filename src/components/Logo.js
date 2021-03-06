import { Text, Image, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LogoLight from '../assets/logo/logo.png';
import LogoDark from '../assets/logo/logo-dark.png';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const logoImage = useColorModeValue(LogoLight, LogoDark);
  return (
    <Link to="/">
      <LogoBox>
        <Image src={logoImage} width={30} height={30} alt="logo" />
        <Text color={useColorModeValue('#1A202C', 'RGBA(255, 255, 255, 0.92)')} ml={3}>
          Гостев Денис
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
