export const GradientStuff = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <div
        className={`
    h-12 w-72 rounded-lg 
    bg-gradient-to-r
    from-red-400 from-40% via-blue-400 via-50% to-yellow-400 to-80%
  `}
      />
    </div>
  );
};