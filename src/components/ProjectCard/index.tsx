import Image from 'next/image'
import Link from 'next/link'

import { IProject } from '@/types/common-interfaces'
import styles from './styles.module.css'

interface IProjectCard {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <>
      <div className={styles.projectCard}>
        <Image src={`/images/${project.image}`} width={400} height={200} alt='lnmiit-physics-lab' priority/>
        <div className={styles.projectDescription}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <Link href={project?.projectLink}>{project?.projectLink}</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectCard