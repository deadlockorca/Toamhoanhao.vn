import translations from "./contact-translations.json";
import { officeAddresses } from "./site";
import type { SiteLocale } from "@/lib/locale";

export type ContactMessages = Record<keyof typeof translations.vi, string>;

export function getContactMessages(locale: SiteLocale): ContactMessages {
  return translations[locale];
}

// Map searches use the original addresses so every language points to the same office.
export const contactOffices = officeAddresses.map((address) => ({
  city: address.slice(0, address.indexOf(": ")),
  address,
}));
