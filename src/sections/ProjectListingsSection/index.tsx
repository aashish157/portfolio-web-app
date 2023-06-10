import ProjectCard from "@/components/ProjectCard"
import { IProject } from "@/types/common-interfaces"

import styles from './styles.module.css'

interface IProjectListingsSection {
  projectList: IProject[];
}

const ProjectListingsSection = ({ projectList }: IProjectListingsSection) => {
  return (
    <div className={styles.projectListingsSection}>
      {
        projectList.map((project) => (
        <>
          <ProjectCard project={project}/>
        </>
      ))}
    </div>
  )
}

export default ProjectListingsSection
