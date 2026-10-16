"use client";
import { introTranslator } from "@/data/introduction";
import { type SiteLocale } from "@/lib/locale";

import { useState } from "react";
import styles from "@/app/gioi-thieu/tuyen-dung/recruitment.module.css";
export function JobBoard({ locale = "vi" }: { locale?: SiteLocale }) {
  const t = introTranslator(locale);
  const positions = [
    {
      title: t("architectTitle"),
      department: t("designDepartment"),
      count: t("twoOpenings"),
      salary: t("architectSalary"),
      description: t("architectDescription"),
      requirements: [
        t("architectEducation"),
        t("architectSoftware"),
        t("architectExperience"),
        t("architectSkills"),
      ],
    },
    {
      title: t("engineerTitle"),
      department: t("constructionDepartment"),
      count: t("twoOpenings"),
      salary: t("engineerSalary"),
      description: t("engineerDescription"),
      requirements: [
        t("engineerEducation"),
        t("engineerExperience"),
        t("engineerKnowledge"),
        t("engineerSkills"),
      ],
    },
    {
      title: t("salesTitle"),
      department: t("salesDepartment"),
      count: t("threeOpenings"),
      salary: t("salesSalary"),
      description: t("salesDescription"),
      requirements: [
        t("salesSkills"),
        t("salesExperience"),
        t("salesAttitude"),
      ],
    },
    {
      title: t("workerTitle"),
      department: t("constructionDepartment"),
      count: t("fiveOpenings"),
      salary: t("workerSalary"),
      description: t("workerDescription"),
      requirements: [
        t("workerExperience"),
        t("workerSafety"),
        t("workerTravel"),
      ],
    },
  ];

  const filters = [
    t("all"),
    t("designDepartment"),
    t("constructionDepartment"),
    t("salesDepartment"),
  ];

  const [filter, setFilter] = useState(t("all"));
  const [selected, setSelected] = useState(0);
  const visible = positions
    .map((job, index) => ({ job, index }))
    .filter(({ job }) => filter === t("all") || job.department === filter);
  const active = visible.find(({ index }) => index === selected) ?? visible[0];

  return (
    <>
      <div className={styles.filters} aria-label={t("filterLabel")}>
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? styles.filterActive : ""}
            aria-pressed={filter === item}
            onClick={() => {
              setFilter(item);
              const first = positions.findIndex(
                (job) => item === t("all") || job.department === item,
              );
              setSelected(first);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.jobsGrid}>
        <div
          className={styles.jobsList}
          role="tablist"
          aria-label={t("jobsLabel")}
        >
          {visible.map(({ job, index }) => (
            <button
              key={job.title}
              id={`job-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={active.index === index}
              aria-controls="job-details"
              className={active.index === index ? styles.jobSelected : ""}
              onClick={() => setSelected(index)}
            >
              <span>
                <strong>{job.title}</strong>
                <small>{job.department}</small>
              </span>
              <span className={styles.jobMeta}>
                <em>{job.count}</em>
                <small>{job.salary}</small>
              </span>
            </button>
          ))}
        </div>
        <article
          id="job-details"
          role="tabpanel"
          aria-labelledby={`job-tab-${active.index}`}
          className={styles.jobDetails}
        >
          <div className={styles.jobBadges}>
            <span>{active.job.department}</span>
            <span>{active.job.count}</span>
          </div>
          <h3>{active.job.title}</h3>
          <p>{active.job.description}</p>
          <div className={styles.salary}>
            <small>{t("salary")}</small>
            <strong>{active.job.salary}</strong>
          </div>
          <h4>{t("requirements")}</h4>
          <ul>
            {active.job.requirements.map((requirement) => (
              <li key={requirement}>
                <span aria-hidden="true">✓</span>
                {requirement}
              </li>
            ))}
          </ul>
          <a
            className={styles.applyButton}
            href={`mailto:hotro.toamhoanhao@gmail.com?subject=${encodeURIComponent(t("emailTemplate").replace(t("emailTemplate").split(" – ")[1], active.job.title))}`}
          >
            {t("applyPosition")}{" "}
          </a>
        </article>
      </div>
    </>
  );
}
