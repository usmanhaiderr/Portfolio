import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  useToast,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const showWhatsappToast = () => {
    toast({
      title: 'Would you like to Contact?',
      description: 'Ping me up at +92 315 7780971',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
      status: 'info',
    })
  }
  const showMailToast = () => {
    toast({
      title: 'Would you like to Contact?',
      description: 'Send me mail at usmanhb12@gmail.com',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
      status: 'info',
    })
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>
          <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={20}>
          <Link target={'_blank'} href='https://www.linkedin.com/in/usman-haider-5aaa701a0/'> <Button fontSize={25}><BsLinkedin/></Button></Link>
          <Link target={'_blank'} href='https://github.com/usmanhaiderr'> <Button fontSize={25}><BsGithub/></Button></Link>  
           <Button fontSize={25} onClick={showWhatsappToast}><BsWhatsapp/></Button>
           <Button fontSize={25} onClick={showMailToast}><SiGmail/></Button>
          </Stack>
          </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}