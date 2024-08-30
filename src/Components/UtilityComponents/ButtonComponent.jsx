const ButtonComponent = ({ size, text,colorScheme, onClickFunction }) => {
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-700 text-white',
    green: 'bg-green-500 hover:bg-green-700 text-white',
    slate: 'bg-slate-500 hover:bg-indigo-500 text-white',
  };

  const sizeClasses = {
    small: 'px-3 py-2 text-xs',
    medium: 'px-5 py-2.5 text-sm',
    large: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`block rounded-md ${colorClasses[colorScheme] || colorClasses.slate} ${sizeClasses[size] || sizeClasses.medium} font-medium transition`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
