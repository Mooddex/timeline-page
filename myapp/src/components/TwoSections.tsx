import { Box, Typography, Button, } from '@mui/material';
import bannerImg from '../assets/img/banner.jpg'; // ✅ adjust the path if needed

export default function TwoSections() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          height: '100%',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={bannerImg}
          alt="Banner"
          sx={{
            width: { xs: '100%', md: '50%' },
            objectFit: 'cover',
            height: { xs: 300, md: 'auto' },
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            bgcolor: '#d0f0c0',
            p: { xs: 3, md: 5 },
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Our Timeline
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
            A lot has passed and a lot is still to come.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}