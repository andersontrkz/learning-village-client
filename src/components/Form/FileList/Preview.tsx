import { Flex, Image } from '@chakra-ui/react';

import { IFile } from '../../../context/Uploader';

interface PreviewProps {
  file?: IFile;
}

function Preview({ file }: PreviewProps) {
  const generatePreviewType = () => {
    const type = file?.file?.type.split('/')[0];
    const src = file?.preview;

    if (type === 'image') {
      return <Image src={src} />;
    }

    if (type === 'video') {
      return (
        <video muted loop>
          <source src={src} type="video/mp4" />
        </video>
      );
    }
  };

  return (
    <Flex h="112px" w="112px" m="4px" position="absolute" zIndex="-1">
      {generatePreviewType()}
    </Flex>
  );
}

export default Preview;
