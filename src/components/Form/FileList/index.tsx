import { Flex, Box } from '@chakra-ui/react';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { useFiles, IFile } from '../../../context/Uploader/index';
import UploadMessage from '../Upload/UploadMessage';

import Preview from './Preview';

type IFileList = {
  active?: boolean;
  reject?: boolean;
};

const FileList = ({ active, reject }: IFileList) => {
  const { uploadedFiles: files, deleteFile } = useFiles();

  const renderDragMessage = useCallback(() => {
    if (!active) {
      return <UploadMessage>Nenhuma imagem...</UploadMessage>;
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
    <Flex>
      {files.map((uploadedFile: IFile) => (
        <Box key={uploadedFile.id}>
          <Preview file={uploadedFile} />
          <Flex justifyContent="space-between" h="112px" w="112px" m="4px">
            <Box alignSelf="flex-end">
              {!uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: '#7159c1' },
                  }}
                  strokeWidth={10}
                  text={String(uploadedFile.progress)}
                  value={uploadedFile.progress || 0}
                />
              )}

              {uploadedFile.url && (
                <a href={uploadedFile.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 8 }} color="#222" />
                </a>
              )}

              {uploadedFile.uploaded && <FontAwesomeIcon icon={faCheckCircle} color="#78e5d5" />}
              {uploadedFile.error && <FontAwesomeIcon icon={faCheckCircle} color="#78e5d5" />}
            </Box>

            {!uploadedFile.url && (
              <Box
                bg="var(--primary-color)"
                h="20px"
                py="0"
                px="1"
                m="0"
                fontSize="20px"
                lineHeight="0"
              >
                <FontAwesomeIcon
                  onClick={(_e) => deleteFile(uploadedFile.id)}
                  icon={faTimes}
                  color="var(--white-color)"
                  cursor="pointer"
                  enableBackground="#000"
                />
              </Box>
            )}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default FileList;
