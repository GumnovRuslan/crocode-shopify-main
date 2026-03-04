"use client";

import styles from "./styles.module.scss";
import { Section, Background } from "@/components/ui";
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme";
import { useTranslations } from "next-intl";

const CookiePolicyPage = () => {
  useDarkThemeForHeader();
  const t = useTranslations("CookiePolicyPage");

  return (
    <Section className={styles.page} isBlack>
      <Background
        desktop="/images/background/bg-black-ball-toll.webp"
        alt="background"
      />
      <div className={styles.page__inner}>
        <div className={styles.page__header}>
          <h1 className={styles.page__title}>{t("title")}</h1>
          <p className={styles.page__meta}>{t("effectiveDate")}</p>
          <p className={styles.page__meta}>{t("applies")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section1.title")}</h2>
          <p className={styles.section__text}>{t("section1.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section2.title")}</h2>
          <div className={styles.section__subsection}>
            <p className={styles.section__subsection_title}>
              {t("section2.subsectionA.title")}
            </p>
            <p className={styles.section__text}>
              {t("section2.subsectionA.text")}
            </p>
          </div>
          <div className={styles.section__subsection}>
            <p className={styles.section__subsection_title}>
              {t("section2.subsectionB.title")}
            </p>
            <p className={styles.section__text}>
              {t("section2.subsectionB.text")}
            </p>
          </div>
          <div className={styles.section__subsection}>
            <p className={styles.section__subsection_title}>
              {t("section2.subsectionC.title")}
            </p>
            <p className={styles.section__text}>
              {t("section2.subsectionC.text")}
            </p>
          </div>
          <div className={styles.section__subsection}>
            <p className={styles.section__subsection_title}>
              {t("section2.subsectionD.title")}
            </p>
            <p className={styles.section__text}>
              {t("section2.subsectionD.text")}
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section3.title")}</h2>
          <p className={styles.section__text}>{t("section3.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section4.title")}</h2>
          <p className={styles.section__text}>{t("section4.text")}</p>
        </div>
      </div>
    </Section>
  );
};

export default CookiePolicyPage;
