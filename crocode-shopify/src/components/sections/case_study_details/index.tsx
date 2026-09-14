import styles from "./styles.module.scss";

import { Section } from "@/components/ui";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { ptComponents } from "@/utils/portableTextComponents";

type TProps = {
  solutionRaw: PortableTextBlock[];
  hasGallery?: boolean;
};

const CaseStudyDetails = ({ solutionRaw, hasGallery }: TProps) => {
  if (!solutionRaw || solutionRaw.length === 0) return null;

  return (
    <Section className={`${styles.details} ${!hasGallery ? styles.withoutGallery : ''}`}>
      <div className={styles.details__inner}>
        <div className={styles.details__description}>
          <PortableText value={solutionRaw} components={ptComponents} />
        </div>
      </div>
    </Section>
  );
};

export default CaseStudyDetails;
