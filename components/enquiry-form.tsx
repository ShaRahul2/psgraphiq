'use client';

import { useState } from 'react';
import { profile } from '../lib/projects';

/**
 * Enquiry form. With no mail service connected, submitting opens the
 * visitor's email app with the brief already written, addressed to Priyanka.
 * Swap `handleSubmit` for a form endpoint later if you want in-page sending.
 */
export default function EnquiryForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const v = new FormData(event.currentTarget);
    const name = `${v.get('first') ?? ''} ${v.get('last') ?? ''}`.trim();
    const subject = `Project enquiry from ${name || 'the website'}`;
    const lines = [`Name: ${name}`, `Email: ${v.get('email') ?? ''}`];
    if (v.get('phone')) lines.push(`Phone: ${v.get('phone')}`);
    lines.push(`About: ${v.get('type') ?? ''}`, '', String(v.get('message') ?? ''));
    const body = lines.join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(`Your email app should open with the brief ready to send. If it doesn’t, write to ${profile.email}.`);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        First name <span className="req">*</span>
        <input name="first" autoComplete="given-name" required maxLength={100} />
      </label>
      <label>
        Last name
        <input name="last" autoComplete="family-name" maxLength={100} />
      </label>
      <label>
        Email <span className="req">*</span>
        <input name="email" type="email" autoComplete="email" required maxLength={254} />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
      </label>
      <fieldset className="full types">
        <legend>What’s this about?</legend>
        {['Full-time role', 'Freelance / retainer', 'Brand system', 'Campaign'].map((t, i) => (
          <label key={t} className="type-chip">
            <input type="radio" name="type" value={t} defaultChecked={i === 0} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      <label className="full">
        What are we really trying to say? <span className="req">*</span>
        <textarea name="message" rows={4} required maxLength={3000} placeholder="The idea, the challenge, the timeline…" />
      </label>
      <button type="submit" className="btn btn-accent full" data-magnetic style={{ justifyContent: 'center' }}>
        Send the brief →
      </button>
      <p className="form-note full">Opens your email app with everything filled in — nothing is stored on this site.</p>
      <p className="status full" role="status">{status}</p>
    </form>
  );
}
