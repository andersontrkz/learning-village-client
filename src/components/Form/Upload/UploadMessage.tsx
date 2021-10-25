import { Flex } from '@chakra-ui/layout';
import React from 'react';

interface ITypeMessageColor {
  type?: 'default' | 'error' | 'success';
  children: string;
}

const messageColors = {
  default: 'var(--primary-color)',
  error: '#e57878',
  success: '#78e5d5',
};

function UploadMessage({ type, children }: ITypeMessageColor) {
  return (
    <Flex
      height="full"
      justifyContent="center"
      alignItems="center"
      color={`${messageColors[type || 'default']}`}
    >
      {children}
    </Flex>
  );
}

export default UploadMessage;
