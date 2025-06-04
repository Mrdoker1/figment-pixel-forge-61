import React from 'react';
import { CommentInput } from './CommentInput';

interface FeedbackHeaderProps {
  initialComment: string;
  onInitialCommentChange: (comment: string) => void;
}

export const FeedbackHeader: React.FC<FeedbackHeaderProps> = ({
  initialComment,
  onInitialCommentChange
}) => {
  return (
    <header className="flex flex-col items-start gap-5 w-full bg-[#F6F6F6] px-[30px] py-16 max-md:px-5 max-md:py-10 max-sm:px-[15px] max-sm:py-[30px]">
      <h1 className="w-full text-[#28292B] text-[54px] font-bold leading-[54px] max-md:text-[42px] max-sm:text-[32px]">
        Help us improve
      </h1>
      <p className="w-full text-[#4F4F4F] text-2xl font-normal leading-[31.2px] max-md:text-xl max-sm:text-lg">
        Has your overall satisfaction with the team changed since your last
        feedback submission?
      </p>
      <CommentInput
        value={initialComment}
        onChange={onInitialCommentChange}
      />
      <p className="w-full text-[#5F5F5F] text-base font-normal leading-[20.8px]">
        *This form is used for collecting formal feedback from customers on
        a regular basis. The results of the survey will be used for
        improving the quality of our services and optimizing the work of the
        project team.
      </p>
    </header>
  );
};
