import { PROJECTS } from '../../static/lib/mocks/project-listings';
import ProjectListingsSection from '@/sections/ProjectListingsSection';

const ProjectsPage = () => {
  return (
    <>
      <ProjectListingsSection projectList={PROJECTS} />
    </>
  );
};

export default ProjectsPage;
