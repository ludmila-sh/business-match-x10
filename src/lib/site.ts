import { z } from "astro/zod";
import raw from "../content/site.json";

// Editors change site.json (later through a CMS). Validation makes a bad edit
// fail the build instead of publishing a broken or unsafe page.
const httpsUrl = z.url({ protocol: /^https$/, error: "Only https:// links are allowed" });

const optionalLink = z.union([z.literal(""), httpsUrl]);
const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Use HH:MM");
const optionalTime = z.union([z.literal(""), time]);
const optionalDate = z.union([z.literal(""), z.iso.date()]);
const text = z.string().min(1);
const textItems = z.array(z.object({ title: text, text: text }));

const siteSchema = z.object({
  name: text,
  tagline: text,
  motto: text,
  mainQuestion: text,
  summary: text,
  nextMeeting: z.object({
    date: optionalDate,
    startTime: optionalTime,
    endTime: optionalTime,
    venueName: z.string(),
    address: z.string(),
    city: text,
    registrationUrl: optionalLink,
  }),
  contacts: z.object({
    telegramUrl: optionalLink,
    phone: z.string().regex(/^$|^\+?[0-9 ()-]{7,20}$/, "Use a phone number with country code"),
  }),
  about: z.object({ eyebrow: text, title: text, text: text }),
  audiences: textItems,
  rounds: z.array(z.object({ number: text, title: text, text: text })),
  results: z.array(z.object({ value: text, label: text })),
  benefits: z.array(text),
  values: textItems,
  disclaimer: text,
  faq: z.array(z.object({ question: text, answer: text })),
  gallery: z.object({ title: text, description: text }),
});

export const site = siteSchema.parse(raw);

const TIME_ZONE = "Europe/Minsk";

export function formatMeetingDate(isoDate: string): { day: string; weekday: string } {
  // Noon avoids the date shifting across midnight in any time zone.
  const date = new Date(`${isoDate}T12:00:00`);
  const day = new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", timeZone: TIME_ZONE }).format(date);
  const weekday = new Intl.DateTimeFormat("ru-RU", { weekday: "long", timeZone: TIME_ZONE }).format(date);
  return { day, weekday };
}

export function hasAnnouncedMeeting(): boolean {
  const meeting = site.nextMeeting;
  return Boolean(meeting.date && meeting.startTime && meeting.endTime && meeting.venueName && meeting.address && meeting.registrationUrl);
}
