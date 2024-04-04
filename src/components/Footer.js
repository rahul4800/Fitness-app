import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FFF3F4">
            <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
                <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
            </Stack>
            <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '12px' } }} mt="41px" textAlign="center" pb="40px">© Copyright </Typography>
        </Box>
    );
}

export default Footer;