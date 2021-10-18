import { Flex, Link, FlexProps } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavItemProps extends FlexProps {
  icon: any;
  name: string;
}

export default function NavItem({ icon, name, ...rest }: NavItemProps) {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: 'var(--white-color)',
          transition: '.9s',
        }}
        {...rest}
      >
        {/* {console.log(rest)} */}
        <FontAwesomeIcon icon={icon} style={{ marginRight: '8px' }} color="var(--primary-color)" />
        {name}
      </Flex>
    </Link>
  );
}
