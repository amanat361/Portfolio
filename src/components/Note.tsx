import React from 'react';

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-lg bg-zinc-800/50 p-6 border border-zinc-700 dark:border-zinc-600">
      <div className="flex">
        <div className="flex-shrink-0">
          {/* Updated icon color to match prose links */}
          <svg className="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <div className="text-sm text-zinc-200 dark:text-zinc-300">{children}</div>
        </div>
      </div>
    </div>
  );
}