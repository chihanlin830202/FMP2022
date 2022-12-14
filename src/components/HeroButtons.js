import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayCircleOutlineOutlined';


const HeroButtons = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    return (
        <React.Fragment>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                justifyContent='center'
                marginTop={4}
            >
                <Button 
                    component='a'
                    variant='contained'
                    size='large'
                    color='primary'
                    href='/classifier'
                    fullWidth={isMd ? false : true}
                    disableElevation={true}
                    sx={{
                        padding: '10px 25px',
                        marginRight: '15px',
                        fontSize: '18px',
                        border: '2px solid white',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: theme.palette.primary.main,
                            border: '2px solid ' + theme.palette.secondary.main
                        }
                    }}
                >
                    Get Started
                </Button>
                <Box
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 1 }}
                    width={{ xs: '100%', md: 'auto' }}
                >
                    <Button 
                        component='a'
                        variant='contained'
                        color='primary'
                        size='large'
                        href='https://youtu.be/PeuTOGVRWP0'
                        startIcon={<PlayIcon />}
                        fullWidth={isMd ? false : true}
                        disableElevation={true}
                        sx={{
                            padding: '10px 25px',
                            marginRight: '15px',
                            fontSize: '18px',
                            border: '2px solid white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: theme.palette.primary.main,
                                border: '2px solid ' + theme.palette.secondary.main
                            }
                        }}
                    >
                        Watch Demo
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default HeroButtons;