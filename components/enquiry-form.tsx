'use client';

import { useState } from 'react';

/**
 * Enquiry form. There is no mail service connected yet, so on submit it
 * downloads the brief as a text file (same behaviour as the previous site).
 * Swap `handleSubmit` for a real endpoint once a destination address is chosen.
 */
export default function EnquiryForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const v = new FormData(event.currentTarget);
    const text = `Project enquiry\n\nName: ${v.get('first')} ${v.get('last')}\nEmail: ${v.get('email')}\nPhone: ${v.get('phone')}\n\n${v.get('message')}`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'project-enquiry.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Your brief has been downloaded (not sent). Share it on Instagram or by email.');
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
      <label className="full">
        What are we really trying to say? <span className="req">*</span>
        <textarea name="message" rows={4} required maxLength={5000} placeholder="The idea, the challenge, the timeline…" />
      </label>
      <p className="form-note full">This form doesn’t send messages yet — it downloads your brief so you can share it.</p>
      <button type="submit" className="btn btn-accent full" data-magnetic style={{ justifyContent: 'center' }}>
        Download the brief →
      </button>
      <p className="status full" role="status">{status}</p>
    </form>
  );
}
