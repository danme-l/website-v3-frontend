import React from 'react';
import { Box, Typography} from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { RiFileList3Line } from 'react-icons/ri'
import { SiLichess } from 'react-icons/si';
import Background from '../../background/Background';
import CircledShadedButton from '../../utils/CircledShadedButton';
import StandardImageList from './ImageList';

export const About = () => {
    const imgSrc = process.env.PUBLIC_URL + '/assets/peggysCove.jpeg'
    return (
        <Box sx={{m: 5}}>
            <Background inputConfigs={{
                scale:0.4, px:50, py:18, numParticles:700
            }}/>
            <Box sx={{width:'50%', float:'left'}}>
                <Typography variant="h2">I am Dan</Typography>
                <Typography variant="body1">
                    I'm currently working at the Canada Revenue Agency's Applied Predictive Analytics Section as a Data Scientist. 
                    I dabble in web development as a hobby and building this blog/website to improve my coding skills, or whatever other topics I decide to work on.
                </Typography>
                <Typography variant='body1'>
                    I'm also an active chess player on Lichess - find my profile below.
                </Typography>
                <Box display={'flex'} flexDirection={'row'}>
                    <CircledShadedButton icon={<LinkedIn />} value={`LinkedIn`} link={'https://www.linkedin.com/in/daniel-meleras-29794920a/'} margin={3}/>
                    <CircledShadedButton icon={<RiFileList3Line />} value={`Resume`} margin={3} link={process.env.PUBLIC_URL + '/assets/docs/danielMeleras.pdf'}/>
                    <CircledShadedButton icon={<SiLichess />} value={`Lichess`} link={'https://lichess.org/@/DanMeleras'} margin={3}/>
                </Box>
                <StandardImageList />
            </Box>
        </Box>
    )   
}