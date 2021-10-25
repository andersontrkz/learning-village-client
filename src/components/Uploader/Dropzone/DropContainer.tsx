import { Box, Button, Flex } from '@chakra-ui/react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFiles } from '../../../context/Uploader';

type DropContainerProps = {
  active?: boolean;
  reject?: boolean;
  open: any;
  children: any;
  root: any;
};

export const DropContainer = ({ active, reject, children, root, open }: DropContainerProps) => {
  const { uploadedFiles: files } = useFiles();

  const setBorderColor = () => {
    if (reject) {
      return 'red';
    }

    if (active) {
      return '#78e5d5';
    }

    return 'var(--primary-color)';
  };

  return (
    <Flex direction="column">
      <Box
        border={`2px solid ${setBorderColor()}`}
        height="124px"
        transition="0.9s"
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
        py="4"
        margin={!files.length ? '-20px auto auto' : '20px auto auto'}
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
};

export default DropContainer;
