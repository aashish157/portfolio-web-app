import { PROJECTS } from '../../static/lib/mocks/project-listings';
import ProjectListingsSection from '@/sections/ProjectListingsSection';

const ProjectsPage = () => {
  return (
    <>
      {/* <div>Hello</div> */}
      <ProjectListingsSection projectList={PROJECTS} />
    </>
  );
};

export default ProjectsPage;
