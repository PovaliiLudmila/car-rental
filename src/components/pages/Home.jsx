import { NavLink } from 'react-router-dom';
import { Box, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box position="relative">
      <Box>
        <Box color="brand.creme" mt="100">
          <Heading fontSize="80" fontWeight="700" lineHeight="90%" mb="10">
            WELCOME TO YOUR <br></br> PHONEBOOK
          </Heading>
          <NavLink to="/register">
            <Button
              color="brand.main"
              variant="solid"
              colorScheme="yellow"
              p="10"
              borderRadius="50"
            >
              Let's start!
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}