import { Box, Button, Flex } from '@chakra-ui/react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IDropContainer = {
  active?: boolean;
  reject?: boolean;
  open: any;
  children: any;
  root: any;
};

function DropContainer({ active, reject, children, root, open }: IDropContainer) {
  const setBorderColor = () => {
    if (active) {
      return '#78e5d5';
    }

    if (reject) {
      return '#e57878';
    }

    return 'var(--primary-color)';
  };

  return (
    <Flex direction="column">
      <Box
        border="2px"
        height="124px"
        borderColor={setBorderColor()}
        transition="height 0.2s ease"
        {...root()}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </Box>
      <Button
        fontSize="20px"
        fontWeight="normal"
        bg="var(--primary-color)"
        textColor={'var(--white-color)'}
        rounded="none"
        pt="4"
        pb="4"
        margin="-20px auto auto"
        leftIcon={<FontAwesomeIcon icon={faCamera} size="xs" />}
        _hover={{
          bg: 'var(--primary-color-alt)',
          transition: '.9s',
        }}
        onClick={open}
      >
        ADICIONAR IMAGEM OU VÍDEO
      </Button>
    </Flex>
  );
}

export default DropContainer;
