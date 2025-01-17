import { Box, Typography, Stack, Button } from "@mui/material";
import BannerImage from "../assets/images/gym_image.avif";

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#FF2625"
                fontWeight="600" fontSize="26px"
            >
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
                <Button href="#exercises" variant="contained" color="error" sx={{
                    backgroundColor: '#ff2625', padding: '10px', width: "200px", borderRadius: "4px", marginTop: '45px'
                }}
                >
                    Explore Exercises</Button>
            </Stack>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
            <img src={BannerImage} alt="hero-banner" className="hero-banner-img" />

        </Box>
    );
}

export default HeroBanner;