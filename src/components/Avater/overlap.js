import React from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import { firstimage, secondimage, thridimage } from '../../_mock/image';
import { avaterimage } from '../../_mock/branch';

const AvatarList = ({height, width, onPress}) => {
  return (
    <AvatarGroup onClick={onPress}  max={5} spacing="small">
    {
        avaterimage.map((item, index)=>(
            <Avatar
            key={index}
            alt={item.name}
            src={item.image}
            sx={{ height, width }} // Adjust size as needed
          />
        ))
    }
    
    </AvatarGroup>
  );
};

export default AvatarList;
