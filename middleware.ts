import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export default function middleWare(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      "bubbles.svg",
      "down-arrow.png",
      "down.svg",
      "favicon.png",
      "header.png",
      "home.png",
      "logo.png",
      "system/chat.png",
      "system/check.png",
      "system/coordinator.svg",
      "system/desktop.svg",
      "system/jojo.png",
      "system/phone.png",
      "system/patient.svg",
      "system/pill.png",
      "system/test.png",
      "team/jane.png",
      "team/john.png",
      "team/jojo.png",
      "team/meme.png",
    ].includes(pathname)
  )
    return;

  const pathNameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
