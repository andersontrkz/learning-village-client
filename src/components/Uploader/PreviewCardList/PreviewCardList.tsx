import { Flex, Box } from '@chakra-ui/react';
import { useCallback } from 'react';

import { useFiles, IFile } from '../../../context/Uploader/index';

import Preview from './Preview';
import PreviewCard from './PreviewCard';
import UploadMessage from './UploadMessage';

type PreviewCardListProps = {
  active?: boolean;
  reject?: boolean;
};

export const PreviewCardList = ({ active, reject }: PreviewCardListProps) => {
  const { uploadedFiles: files } = useFiles();

  const renderDragMessage = useCallback(() => {
    if (!active) {
      return <UploadMessage>Nenhuma imagem</UploadMessage>;
    }

    if (reject) {
      return <UploadMessage type="error">Tipo de arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
  }, [active, reject]);

  if (!files.length)
    return (
      <Flex
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        color="var(--primary-color)"
      >
        {renderDragMessage()}
      </Flex>
    );

  return (
    <Flex justifyContent="center">
      {files.map((uploadedFile: IFile) => (
        <Box key={uploadedFile.id}>
          <Preview file={uploadedFile} />
          <Flex justifyContent="flex-end" h="112px" w="112px" m="4px">
            <PreviewCard uploadedFile={uploadedFile} />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};
