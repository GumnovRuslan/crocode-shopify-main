import { formatProjectWorkDone } from "@/utils/projectWorkDone";
import styles from "./styles.module.scss";

import Link from "next/link";
import Background from "../../background";
import { TProjectCard } from "@/types/templates/project";

type TProps = {
  className?: string;
  project: TProjectCard;
};

const ProjectCard = ({ className, project }: TProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <Background
        classNameImage={styles.card__image}
        desktop={
          project?.cardImage?.image?.asset?.url ||
          // "/images/cards/card-project.png"
          "/images/background/bg_hero_mobile.webp"
        }
        alt={project?.cardImage?.altText || `Project ${project?.title}`}
      />
      <Link
        href={`/our-work/${project?.slug.current}`}
        className={styles.card__link}
      >
        <span className={styles.card__title}>{project?.title}</span>
        <span className={styles.card__label}>{formatProjectWorkDone(project?.workDone)}</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
