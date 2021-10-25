import { Box } from '@chakra-ui/react';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';

import { useFiles } from '../../../context/Uploader';

type PreviewCardProps = {
  uploadedFile: any;
};

const PreviewCard = ({ uploadedFile }: PreviewCardProps) => {
  const { deleteFile } = useFiles();

  return (
    <Box>
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
      {uploadedFile.error && (
        <Box bg="var(--primary-color)" py="4px" px="6px" m="0" fontSize="20px" lineHeight="0">
          <FontAwesomeIcon
            onClick={(_e) => deleteFile(uploadedFile.id)}
            icon={faTimes}
            color="var(--white-color)"
            cursor="pointer"
          />
        </Box>
      )}
    </Box>
  );
};

export default PreviewCard;
