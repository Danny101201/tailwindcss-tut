import { FiBell } from "react-icons/fi";
import { SiAirbnb } from "react-icons/si";

export const AnimationExample = () => {
  return (
    <div className="flex h-12 w-72 items-center justify-between rounded-lg bg-white px-4">
      <SiAirbnb className="text-2xl" />

      <button className="relative">
        <FiBell />
        <span className="sr-only">Notifications</span>

        <span className="absolute -top-1 right-0 h-2 w-2 rounded-full bg-red-500 animate-ping" />
      </button>
    </div>
  );
};