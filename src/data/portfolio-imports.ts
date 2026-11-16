import records from "@/data/portfolio-imports.json";
import type { Project } from "@/data/projects";
import type { DesignSample } from "@/data/design-samples";

// Audited legacy records with available source images. An existing database
// record always takes precedence, including an unpublished record.
export const importedPortfolioProjects = records.projects as Project[];
export const importedPortfolioSamples = records.designSamples as DesignSample[];
