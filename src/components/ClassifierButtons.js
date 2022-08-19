import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';

const ClassifierButtons = ({ submitOnClick, resetOnClick }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    return (
        <React.Fragment>
            <Box marginTop={4}>
                <Box
                    display='flex'
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems='center'
                    justifyContent='center'
                    marginTop={4}
                >
                    <Button 
                        variant='contained'
                        color='primary'
                        size='large'
                        startIcon={<SendIcon />}
                        fullWidth={isMd ? false : true}
                        disableElevation={true}
                        onClick={submitOnClick}
                        sx={{
                            padding: '10px 25px',
                            marginRight: '15px',
                            fontSize: '18px',
                            border: '1px solid transparent',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: theme.palette.primary.main,
                                border: '2px solid ' + theme.palette.primary.main
                            }
                        }}
                    >
                        Send Image
                    </Button>
                    <Box
                        marginTop={{ xs: 2, sm: 0 }}
                        marginLeft={{ sm: 1 }}
                        width={{ xs: '100%', md: 'auto' }}
                    >
                        <Button 
                            variant='contained'
                            color='primary'
                            size='medium'
                            startIcon={<ResetIcon />}
                            fullWidth={isMd ? false : true}
                            disableElevation={true}
                            onClick={resetOnClick}
                            sx={{
                                padding: '10px 25px',
                                marginRight: '15px',
                                fontSize: '18px',
                                border: '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: theme.palette.primary.main,
                                    border: '2px solid ' + theme.palette.primary.main
                                }
                            }}
                        >
                            Reset Image
                        </Button>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default ClassifierButtons;


