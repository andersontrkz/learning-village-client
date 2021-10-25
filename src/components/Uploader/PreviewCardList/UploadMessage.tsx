import { Flex } from '@chakra-ui/layout';
import React from 'react';

interface UploadMessageProps {
  type?: 'default' | 'error' | 'success';
  children: string;
}

const messageColors = {
  default: 'var(--primary-color)',
  error: '#e57878',
  success: '#78e5d5',
};

function UploadMessage({ type, children }: UploadMessageProps) {
  return (
    <Flex
      height="full"
      justify="center"
      alignItems="center"
      color={`${messageColors[type || 'default']}`}
      transition="0.9s"
    >
      {children}
    </Flex>
  );
}

export default UploadMessage;
