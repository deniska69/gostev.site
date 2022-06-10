import { Text, Image, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  const logoImage = `/logo${useColorModeValue('', '-dark')}.png`;
  return (
    // <a href="/">
    //   <LogoBox>
    //     <Image src={logoImage} width={30} height={30} alt="logo" />
    //     <Text color={useColorModeValue('#1A202C', 'RGBA(255, 255, 255, 0.92)')} ml={3}>
    //       Гостев Денис
    //     </Text>
    //   </LogoBox>
    // </a>
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
