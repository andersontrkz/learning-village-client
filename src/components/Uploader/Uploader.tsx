import { Box } from '@chakra-ui/layout';

import { FileProvider } from '../../context/Uploader';

import { Dropzone } from './Dropzone';

export const Uploader = () => {
  return (
    <FileProvider>
      <Box w="full">
        <Dropzone />
      </Box>
    </FileProvider>
  );
};

export default Uploader;
