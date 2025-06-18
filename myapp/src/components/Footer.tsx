import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 6,
        px: 3,
        bgcolor: '#000',
        color: '#fff',
        borderTop: '1px solid #444',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
          flexWrap: 'wrap',
        }}
      >
        {[
          { title: 'Company', items: ['About', 'Careers', 'Newsroom'] },
          { title: 'Resources', items: ['Contact', 'Help Center', 'Privacy Policy'] },
          { title: 'Explore', items: ['Brands', 'Locations', 'Impact'] },
          { title: 'Follow Us', items: ['Facebook', 'LinkedIn', 'Twitter'] },
        ].map((section) => (
          <Box key={section.title}>
            <Typography variant="h6" gutterBottom>{section.title}</Typography>
            {section.items.map((item) => (
              <Typography key={item} sx={{ opacity: 0.8 }}>{item}</Typography>
            ))}
          </Box>
        ))}
      </Box>

      <Box textAlign="center" mt={4} fontSize="14px">
        &copy; {new Date().getFullYear()} OLX Group. All rights reserved.
      </Box>
    </Box>
  );
}
