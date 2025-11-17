import React from 'react';

export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="mb-2 text-base font-medium" style={{ color: 'var(--tw-prose-headings, #111827)' }}>
          {title}
        </h3>
      )}
      <div className="pl-4 border-l-2 border-primary/30" style={{ color: 'var(--tw-prose-body, #4b5563)' }}>
        {children}
      </div>
    </div>
  );
}