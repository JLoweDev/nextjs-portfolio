import { Box, Typography, Button, Container } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main', // Example background color from your Material-UI theme
        color: 'white',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Hello, I'm [Your Name]
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4 }}>
          A passionate software developer showcasing my latest coding projects.
        </Typography>
        {/* Optional: Add a call to action button */}
        {/* <Button variant="contained" color="secondary" size="large">
          Learn More
        </Button> */}
      </Container>
    </Box>
  );
}