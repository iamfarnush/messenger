import { UserIcon } from "lucide-react";
import React from "react";

const CurrentUser = () => {
  return (
    <div className="p-[1.25rem] flex items-center">
      <UserIcon width={50} height={50} className="mr-4 border border-[2px] rounded-full" />
      <span>John Wick</span>
    </div>
  );
};

export default CurrentUser;
