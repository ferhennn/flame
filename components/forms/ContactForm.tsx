"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

const fieldClass =
  "w-full border-b border-line bg-transparent py-4 text-lg text-ink placeholder:text-ink-mute focus:border-ink outline-none transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <p className="text-lg text-ink-dim" role="status">
        Thanks &mdash; your message is on its way. I&rsquo;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
            NAME
          </label>
          <input id="name" name="name" type="text" required className={`${fieldClass} mt-3`} />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
            EMAIL
          </label>
          <input id="email" name="email" type="email" required className={`${fieldClass} mt-3`} />
        </div>
      </div>

      <div>
        <label htmlFor="project" className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
          PROJECT
        </label>
        <input id="project" name="project" type="text" className={`${fieldClass} mt-3`} />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
          MESSAGE
        </label>
        <textarea id="message" name="message" required rows={4} className={`${fieldClass} mt-3 resize-none`} />
      </div>

      <MagneticButton
        type="submit"
        className="mt-4 inline-flex w-fit items-center gap-2 border border-ink/70 px-7 py-4 font-mono text-[11px] tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-bg"
      >
        SEND MESSAGE
      </MagneticButton>
    </form>
  );
}
