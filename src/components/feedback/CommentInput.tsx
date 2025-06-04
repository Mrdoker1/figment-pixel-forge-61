import React from 'react';
import { Mic } from 'lucide-react';

interface CommentInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  value,
  onChange,
  placeholder = "Add your comment"
}) => {
  return (
    <div className="flex h-20 max-w-[800px] justify-end items-end gap-2.5 w-full rounded border bg-white p-3 border-solid border-[#B5B5B5] max-sm:h-[60px]">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-[1_0_0] self-stretch text-[#707070] text-lg font-normal leading-6 max-sm:text-base bg-transparent border-none outline-none resize-none"
        rows={1}
      />
      <button
        type="button"
        className="flex items-center justify-center w-[30px] h-[31px] rounded-[20px] bg-[#E8E8E8] flex-shrink-0"
        aria-label="Voice input"
      >
        <Mic className="w-4 h-4 text-black" />
      </button>
    </div>
  );
};
