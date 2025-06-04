import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  disabled = false
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="flex w-[300px] h-[50px] justify-center items-center relative cursor-pointer px-0.5 py-[15.5px] rounded-[25px] border-2 border-solid border-[#C1272D] max-md:w-[250px] max-sm:w-[200px] max-sm:h-[45px] hover:bg-[#C1272D] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="text-[#C1272D] text-[19px] font-normal leading-[19px] uppercase max-sm:text-base hover:text-white">
        SEND
      </span>
    </button>
  );
};
