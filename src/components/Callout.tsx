// components/Callout.jsx
export function Callout({ title, children }) {
  return (
    <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
      {title && (
        <h3 className="mb-4 text-base font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      <div className="text-gray-800 dark:text-gray-200">
        {children}
      </div>
    </div>
  )
}