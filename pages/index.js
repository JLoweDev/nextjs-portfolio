import Head from 'next/head';
import { Container, Typography, Grid } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import Layout from '../components/Layout'; // Optional

// Hardcoded project data for now
const projects = [
  {
    id: 1,
    title: 'Next.js Portfolio',
    description: 'A portfolio for displaying projects and the technologies used to create them.',
    screenshot: '/project-screenshots/project1-screenshot.png', // Image in public folder
    technologies: ['Next.js', 'Material UI', 'React'],
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'This project showcas',
    screenshot: '/project-screenshots/project2-screenshot.png',
    technologies: ['Next.js', 'Material-UI', 'Firebase'],
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'An interesting ',
    screenshot: '/project-screenshots/project3-screenshot.png',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
  },
];

export default function Home() {
  const reversedProjects = [...projects].reverse();

  return (
    <Layout> {/* Optional: If you have a global layout */}
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Portfolio of coding projects by Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />

      <Container maxWidth="1" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4, mb: 4, justifyContent: "center" }}>
          {reversedProjects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}