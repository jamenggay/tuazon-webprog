import React from 'react';
import { Box, Typography } from '@mui/material';

function ReportsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>
      <Typography variant="body1">
        Reports dashboard content goes here.
      </Typography>
    </Box>
  );
}

export default ReportsPage;
