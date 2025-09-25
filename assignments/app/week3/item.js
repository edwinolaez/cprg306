export default function Item ({name, quantity, category}) {
  return (
    <li className="p-2 mb-2 bg-white border-1-4 border-blue-900">
      <div className="flex justify-between">
        <span className="text-lg font-medium text-black">{name}</span>
        <span className="text-lg font-medium text-black">{quantiy}</span>
        <span className="text-lg font-medium text-black">{category}</span>
      </div>
    </li>
  );
}