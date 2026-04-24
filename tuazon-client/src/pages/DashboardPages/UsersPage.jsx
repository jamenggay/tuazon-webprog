import React from 'react';
import { Box, Typography } from '@mui/material';

function UsersPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>
      <Typography variant="body1">
        Users management content goes here.
      </Typography>
    </Box>
  );
}

export default UsersPage;
