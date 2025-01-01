import { Loader2 } from "lucide-react";

const LoaderSpinner = () => (
  <div className="flex items-center justify-center">
    <Loader2 className="w-5 h-5 animate-spin text-white" />
  </div>
);

export default LoaderSpinner;
