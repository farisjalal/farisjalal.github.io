// This is now a Server Component to allow generateStaticParams

// Removed unused useState, useEffect imports as this is a Server Component
import { projectsData } from "@/lib/projectsData"; // Import the project data from the shared data file using alias
import Link from "next/link"; // For GitHub link
import Image from "next/image"; // Use next/image for gallery images
import ProjectCarousel from "@/components/ProjectCarousel";

// Helper function to find project by slug (can be moved to a utils file later)
const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Handle case where project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='project-detail-container'>
      {/* Navbar is now handled by the root layout (layout.js) */}
      <section>
        <main className='project-content'>
          <div className='project-grid'>
            <div className='project-details'>
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
            </div>

            {project.galleryImages && project.galleryImages.length > 0 && (
              <ProjectCarousel
                images={project.galleryImages}
                title={project.title}
              />
            )}
          </div>
        </main>
      </section>

      {/* Basic Footer - Consider shared layout */}
      <footer>
        <p>© 2025 Faris Jalal</p>
        <p>
          <a href='/#contact'>Contact</a>
        </p>
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
