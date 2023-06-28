import { Box, Stack } from '@mui/material';
import React from 'react';

type Props = {
  srcImg: string;
  onClick?: VoidFunction;
};

export const SliderBannerItem = (props: Props) => {
  const { srcImg, onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        // borderRadius: '24px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${srcImg})`,
      }}
    />
  );
};
