import residential from "../townhouse-construction/townhouse-construction.module.css";
import styles from "../renovation-construction/renovation-construction.module.css";

type Props = { label: string; title: string; steps: string[] };
export function ConstructionProcess({ label, title, steps }: Props) {
  return (
    <section className={styles.processSection}>
      <div className={styles.heading}>
        <p className={residential.eyebrow}>{label}</p>
        <h2>{title}</h2>
      </div>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step}>
            <span className={styles.stepNumber} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
