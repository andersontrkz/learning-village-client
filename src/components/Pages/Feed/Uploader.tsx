import { Box } from '@chakra-ui/layout';

import { FileProvider } from '../../../context/Uploader';
// import FileList from '../../Form/FileList';
import Upload from '../../Form/Upload';

function Uploader() {
  return (
    <FileProvider>
      <Box w="full">
        <Upload />
        {/* <FileList /> */}
      </Box>
    </FileProvider>
  );
}

export default Uploader;
