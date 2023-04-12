"use client";

import { Locale } from "@/i18n-config";
import { FormEvent } from "react";

type Contact = {
  title: string;
  required: string;
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  organization: string;
  organizationPlaceholder: string;
  contact: string;
};

export default function ContactForm({
  contact,
  lang,
}: {
  contact: Contact;
  lang: Locale;
}) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let form = e.target as HTMLFormElement;

    let formData = new FormData(form);
    console.log(Object.fromEntries(formData.entries()));

    let response = await fetch(`/${lang}/api/hello`, {
      method: "POST",
      body: JSON.stringify({
        ...Object.fromEntries(formData.entries()),
        lang,
      }),
    });

    let { error } = await response.json();
    if (error) {
      throw new Error(error);
    }
  }

  return (
    <div
      id="contact"
      className="stack bg-[#4285f4] p-4 rounded-md max-w-prose mx-auto"
    >
      <h3 className="text-2xl text-[#cce0ffe5] ">{contact.title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="name" className="text-[#cce0ffaa]">
              {contact.name}{" "}
              <span className="text-xs">{contact.required}*</span>
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="text"
              id="name"
              name="name"
              placeholder={contact.namePlaceholder}
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="email" className="text-[#cce0ffaa]">
              {contact.email}{" "}
              <span className="text-xs">{contact.required}*</span>
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="email"
              id="email"
              name="email"
              placeholder={contact.emailPlaceholder}
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col text-lg w-full">
            <label htmlFor="organization" className="text-[#cce0ffaa]">
              {contact.organization}
            </label>
            <input
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-md"
              type="text"
              id="organization"
              name="organization"
              placeholder={contact.organizationPlaceholder}
            />
          </div>
          <div className="flex self-end">
            <button
              className="bg-[#cce0ffe5] rounded-md text-[#4285f4] px-2 py-1 text-lg"
              type="submit"
            >
              {contact.contact}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
