import Image from 'next/image'

import physicsLabPic from '../../../public/images/lnmiit-physics-lab.png'
import { IProject } from '@/types/common-interfaces'
import styles from './styles.module.css'

interface IProjectCard {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <>
      <div className={styles.projectCard}>
        <Image src={physicsLabPic} width={400} height={200} alt='lnmiit-physics-lab' priority/>
      </div>
    </>
  )
}

export default ProjectCard