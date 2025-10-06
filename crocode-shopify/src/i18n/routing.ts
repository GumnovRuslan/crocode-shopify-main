import {defineRouting} from 'next-intl/routing';

const lang: string = process.env.NEXT_PUBLIC_LOCALE || 'en'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [lang],
 
  // Used when no locale matches
  defaultLocale: lang
});