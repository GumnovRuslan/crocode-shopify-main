"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const COOKIE_CONSENT_KEY = "cookie_consent";

const CookieBanner = () => {
  const t = useTranslations("CookieBanner");
  const [visible, setVisible] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ accepted: true, marketing })
    );
    setVisible(false);

    if (marketing) {
      fetch("/api/cookie-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marketing: true }),
      }).catch(() => {});
    }
  };

  const handleDecline = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ accepted: false, marketing: false })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.banner__inner}>
        <div className={styles.banner__content}>
          <p className={styles.banner__title}>{t("title")}</p>
          <p className={styles.banner__description}>
            {t("description")}{" "}
            <Link href="/cookie-policy" className={styles.banner__link}>
              {t("privacyLink")}
            </Link>
          </p>
          <label className={styles.banner__checkbox}>
            <button
              type="button"
              onClick={() => setMarketing((v) => !v)}
              className={`${styles.banner__checkbox_btn} ${marketing ? styles["banner__checkbox_btn--active"] : ""}`}
            >
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M1.5 5L4 7.5L8.5 2.5"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className={styles.banner__checkbox_label}>
              {t("checkbox")}
            </span>
          </label>
        </div>
        <div className={styles.banner__actions}>
          <button
            type="button"
            onClick={handleDecline}
            className={`${styles.banner__btn} ${styles["banner__btn--decline"]}`}
          >
            {t("decline")}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className={`${styles.banner__btn} ${styles["banner__btn--accept"]}`}
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
