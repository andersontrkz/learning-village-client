import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { useFiles } from '../../../context/Uploader/index';
import { PreviewCardList } from '../PreviewCardList';

import DropContainer from './DropContainer';

export const Dropzone = () => {
  const { handleUpload } = useFiles();

  const onDrop = useCallback(
    (files) => {
      handleUpload(files);
    },
    [handleUpload],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject, open } = useDropzone({
    accept: ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif', 'video/*'],
    onDrop,
  });

  return (
    <DropContainer active={isDragActive} reject={isDragReject} root={getRootProps} open={open}>
      <input {...getInputProps()} />
      <PreviewCardList active={isDragActive} reject={isDragReject} />
    </DropContainer>
  );
};

export default Dropzone;
