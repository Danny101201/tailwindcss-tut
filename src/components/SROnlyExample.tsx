import { FiSettings, FiUser } from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";

export const SROnlyExample = () => {
  return (
    <div className="flex h-12 w-72 items-center justify-between rounded-lg bg-white px-4">
      <SiAirbnb className="text-2xl" />

      <div className="flex gap-4">
        <button>
          <FiSettings />
          <span className="sr-only">Settings</span>
        </button>
        <button>
          <FiUser />
          <span className="sr-only">Account</span>
        </button>
      </div>
    </div>
  );
};