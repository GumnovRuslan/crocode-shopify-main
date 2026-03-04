"use client";

import styles from "./styles.module.scss";
import { Section, Background } from "@/components/ui";
import { useDarkThemeForHeader } from "@/hooks/useHeaderTheme";
import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  useDarkThemeForHeader();
  const t = useTranslations("PrivacyPolicyPage");

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
          <p className={styles.section__text}>{t("section2.intro")}</p>
          <div className={styles.section__subsection}>
            <p className={styles.section__subsection_title}>
              {t("section2.subsectionA.title")}
            </p>
            <ul className={styles.section__list}>
              {(
                t.raw("section2.subsectionA.items") as string[]
              ).map((item, i) => (
                <li key={i} className={styles.section__list_item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.section__subsection}>
            <p className={styles.section__subsection_title}>
              {t("section2.subsectionB.title")}
            </p>
            <ul className={styles.section__list}>
              {(
                t.raw("section2.subsectionB.items") as string[]
              ).map((item, i) => (
                <li key={i} className={styles.section__list_item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section3.title")}</h2>
          <p className={styles.section__text}>{t("section3.intro")}</p>
          <ul className={styles.section__list}>
            {(t.raw("section3.items") as string[]).map((item, i) => (
              <li key={i} className={styles.section__list_item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section4.title")}</h2>
          <p className={styles.section__text}>{t("section4.intro")}</p>
          <ul className={styles.section__list}>
            {(t.raw("section4.items") as string[]).map((item, i) => (
              <li key={i} className={styles.section__list_item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section5.title")}</h2>
          <p className={styles.section__text}>{t("section5.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section6.title")}</h2>
          <p className={styles.section__text}>{t("section6.intro")}</p>
          <ul className={styles.section__list}>
            {(t.raw("section6.items") as string[]).map((item, i) => (
              <li key={i} className={styles.section__list_item}>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.section__text}>{t("section6.outro")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section7.title")}</h2>
          <p className={styles.section__text}>{t("section7.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section8.title")}</h2>
          <p className={styles.section__text}>{t("section8.intro")}</p>
          <ul className={styles.section__list}>
            {(t.raw("section8.items") as string[]).map((item, i) => (
              <li key={i} className={styles.section__list_item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section9.title")}</h2>
          <p className={styles.section__text}>{t("section9.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section10.title")}</h2>
          <p className={styles.section__text}>{t("section10.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section11.title")}</h2>
          <p className={styles.section__text}>{t("section11.text")}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section__title}>{t("section12.title")}</h2>
          <p className={styles.section__text}>{t("section12.text")}</p>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicyPage;
