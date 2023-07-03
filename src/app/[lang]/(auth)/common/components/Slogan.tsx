'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Slogan = () => {
    return ( 
        <Box width={'50%'} height={'50%'} sx={{
            m: 'auto'
        }}>
            <Typography variant='h3'>
                Chào mừng đến với ShopGrocery
            </Typography>
            <Typography color={'#1F8A70'} variant={'h5'}>
                #Căn bếp xanh của mọi nhà
            </Typography>
        </Box>
     );
}
 
export default Slogan;
