import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ height: '100%', width:'20rem', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="180"
        image={project.screenshot}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.technologies.map((tech, index) => (
            <Chip key={index} label={tech} variant="outlined" color="primary" size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}