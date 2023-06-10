import { PROJECTS } from '../../static/lib/mocks/project-listings'
import ProjectListingsSection from '@/sections/ProjectListingsSection';
import FooterSection from '../../sections/FooterSection'

const ProjectsPage = () => {
    return (
        <>
            {/* <div>Hello</div> */}
            <ProjectListingsSection projectList={PROJECTS} />
            <FooterSection />
        </>
    )
}

export default ProjectsPage;