// This is now a Server Component to allow generateStaticParams

// Removed unused useState, useEffect imports as this is a Server Component
import { projectsData } from "faris-jalal-portfolio/lib/projectsData"; // Import the project data from the shared data file using explicit relative path
import Link from "next/link"; // For GitHub link
import Image from "next/image"; // Use next/image for gallery

// Helper function to find project by slug (can be moved to a utils file later)
const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  // Handle case where project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='project-detail-container'>
      {/* Navbar is now handled by the root layout (layout.js) */}
      <main className='project-content'>
        <h1>{project.title}</h1>
        <div className='project-meta'>
          <span>{project.year}</span>
          {project.tags && (
            <div className='tags project-tags'>
              {project.tags.map((tag, tagIndex) => (
                <span className='tag' key={tagIndex}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Long Description */}
        <div className='project-description-long'>
          {project.longDescription &&
            project.longDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

        {/* Image/Video Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className='project-gallery'>
            <h2>Gallery</h2>
            <div className='gallery-grid'>
              {project.galleryImages.map((src, index) => (
                // Basic image display - could be enhanced with a carousel or lightbox
                <div key={index} className='gallery-item'>
                  <Image
                    src={src}
                    alt={`${project.title} gallery image ${index + 1}`}
                    width={500} // Adjust as needed
                    height={300} // Adjust as needed
                    style={{ objectFit: "contain" }} // Or 'cover'
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Link */}
        {project.githubLink && project.githubLink !== "#" && (
          <div className='project-github-link'>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              View on GitHub
            </a>
          </div>
        )}

        {/* Back Link */}
        <div className='back-link'>
          <Link href='/#projects'>← Back to Projects</Link>
        </div>
      </main>

      {/* Basic Footer - Consider shared layout */}
      <footer>
        <p>© {new Date().getFullYear()} Faris Jalal</p>
      </footer>
    </div>
  );
}

// Generate static paths for each project slug
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
