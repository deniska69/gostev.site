import { Text, Link, Image, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20geg);
  }
`;

const Logo = () => {
  const logoImage = `/logo${useColorModeValue('', '-dark')}.png`;
  return (
    <Link href="/">
      <LogoBox>
        <Image src={logoImage} width={30} height={30} alt="logo" />
        <Text color={useColorModeValue('gray.800', 'whiteAplha.900')} fontWeight="bold" ml={3}>
          Гостев Денис
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
