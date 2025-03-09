import React from 'react';

export function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-lg border border-teal-500/20 bg-zinc-900/60 p-6">
      {title && (
        <h3 className="mb-4 text-base font-medium text-teal-300">
          {title}
        </h3>
      )}
      <div className="text-zinc-200 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}