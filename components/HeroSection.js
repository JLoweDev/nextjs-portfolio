import { Box, Typography, Button, Container } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Hello, I&#39;m [Your Name]
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4 }}>
          A passionate software developer showcasing my latest coding projects.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Me
        </Button>
      </Container>
    </Box>
  );
}