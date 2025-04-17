import React from "react";

const SkeletonCard = () => {
  return (
    <div>
      <div className="w-[360px] h-[470px] rounded-lg p-10 dark:bg-[#303030] bg-[#E5E7EB] dark:text-[#E0E0E0] text-gray-900 flex justify-center items-center flex-col gap-16">
        <div className="rounded-md bg-[#d8d9db] dark:bg-[#303030]"/>
        <div className="flex gap-5 flex-col">
          <div className="text-3xl bg-[#d8d9db] w-[200px] h-[30px] dark:bg-[#303030]"></div>
          <div className="text-2xl bg-[#d8d9db] w-[200px] h-[30px] dark:bg-[#303030]"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
