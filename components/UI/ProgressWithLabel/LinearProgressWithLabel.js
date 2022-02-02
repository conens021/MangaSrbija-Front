import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" color={props.color} {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.primary">{props.text}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearProgressWithLabel({progress,color,text}) {
    return (
      <Box sx={{ width: '100%' }}>
        <ProgressWithLabel value={progress} color={color} text={text} />
      </Box>
    );
  }