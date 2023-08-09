import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 600, height: 500 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <Tooltip title={item.title}>
            <ImageListItem key={item.img} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                />
            </ImageListItem>
        </Tooltip>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: process.env.PUBLIC_URL + '/assets/images/peggysCove.jpeg',
    title: "Peggy's Cove, Nova Scotia",
  },
  {
    img: process.env.PUBLIC_URL + '/assets/images/haGiangMountain.JPEG',
    title: 'Somewhere in Northern Vietnam',
  },
  {
    img: process.env.PUBLIC_URL + '/assets/images/cenoteCoconut.jpg',
    title: 'Cancun, Mexico',
  },
  {
    img: process.env.PUBLIC_URL + '/assets/images/linkedInPic.JPG',
    title: "Mum and Dad's Living Room",
  },
  {
    img: process.env.PUBLIC_URL + '/assets/images/skiingBaker.jpg',
    title: 'Mt. Baker, Washington State',
  },
  {
    img: process.env.PUBLIC_URL + '/assets/images/tenerifeMountain.jpeg',
    title: 'Tenerife Moutain, Cape Breton, Nova Scotia',
  },
];