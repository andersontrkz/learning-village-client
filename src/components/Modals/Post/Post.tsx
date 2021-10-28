import { useDisclosure } from '@chakra-ui/hooks';
import {
  Box,
  Text,
  Link,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Avatar,
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Uploader from '../../Uploader/Uploader';

export const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue({ base: 'full', lg: 'xl' });

  return (
    <Box>
      <Button
        zIndex="10"
        fontSize="28px"
        fontWeight="normal"
        bg={'var(--secondary-color)'}
        textColor={'var(--white-color)'}
        rounded="none"
        leftIcon={<FontAwesomeIcon icon={faPlus} size="xs" />}
        w={{ base: 'min' }}
        py="4"
        position="fixed"
        right={{ base: 10, md: 140 }}
        top={{ base: 90, md: 'auto' }}
        _hover={{
          bg: 'var(--secondary-color-alt)',
          transition: '.9s',
        }}
        onClick={onOpen}
      >
        NOVO POST
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalContent p="0" boxShadow="dark-lg" rounded="none">
          <ModalHeader
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="md"
            pl="0"
          >
            <Button
              bg="var(--dark-gray-color)"
              borderRight="4px"
              borderRightColor="var(--primary-color)"
              wrap="nowrap"
              alignItems="center"
              rounded="none"
              _hover={{
                bg: 'var(--dark-gray-color)',
              }}
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="var(--primary-color)" />
              <Text color="var(--white-color)" ml="4" mr="4">
                VOLTAR
              </Text>
            </Button>
            <Text>NOVO POST</Text>
            <Link color="#2D00F7" onClick={() => alert('Clicou')}>
              Postar
            </Link>
          </ModalHeader>
          <ModalBody d="flex" fontFamily="Montserrat" mt="4">
            <Avatar
              showBorder={true}
              size="md"
              src={
                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
            <Textarea
              ml="4"
              resize="none"
              border="none"
              placeholder="Escreva seu post aqui..."
              h={{ base: 80, lg: 40 }}
            />
          </ModalBody>
          <ModalFooter>
            <Uploader />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
