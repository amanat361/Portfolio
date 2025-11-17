import React from 'react';

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 flex items-start pl-6 border-l-2 border-primary/30">
      <span className="mt-1 mr-2 text-primary">📝</span>
      <div className="text-sm" style={{ color: 'var(--tw-prose-body, #4b5563)' }}>
        {children}
      </div>
    </div>
  );
}