// import React from 'react';
// import { Box, CircularProgress, Stack } from '@mui/material';

// const Loader = () =>  (
//   <Box minHeight="95vh">
//     <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
//       <CircularProgress />
//     </Stack>
//   </Box>
// );

// export default Loader;

import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => (
  <Box 
    minHeight="95vh" 
    display="relative"
    marginLeft={'560px'}
    marginTop={'210px'} 
    
  >
    <CircularProgress />
  </Box>
);

export default Loader;

