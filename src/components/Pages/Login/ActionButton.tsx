import { Button } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ActionButtonProps = {
  action: string;
};

export default function ActionButton({ action }: ActionButtonProps) {
  return (
    <Button
      bg={'var(--primary-color)'}
      textColor={'var(--white-color)'}
      rounded="none"
      rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
      width={{ base: '2xs', sm: '2xs', md: '3xs', lg: '3xs' }}
      alignSelf="center"
      pt="6"
      pb="6"
      _hover={{
        bg: 'var(--primary-color-alt)',
        transition: '.9s',
      }}
    >
      {action}
    </Button>
  );
}
