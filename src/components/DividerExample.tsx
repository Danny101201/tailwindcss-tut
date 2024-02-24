import {
  FiDownload,
  FiEdit,
  FiSave,
} from "react-icons/fi";

export const DividerExample = () => {
  return (
    <div className="flex  overflow-hidden rounded-lg bg-white text-neutral-900 divide-x-2 divide-red-500">
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-violet-100">
        <span>Edit</span>
        <FiEdit />
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-violet-100">
        <span>Save</span>
        <FiSave />
      </button>
      <button className="flex items-center justify-center gap-2 px-4 py-2 transition-colors hover:bg-violet-100">
        <span>Export</span>
        <FiDownload />
      </button>
    </div>
  );
};