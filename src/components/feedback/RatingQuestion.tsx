import React from 'react';
import { RatingSlider } from './RatingSlider';
import { CommentInput } from './CommentInput';

interface RatingQuestionProps {
  question: string;
  rating: number;
  comment: string;
  onRatingChange: (rating: number) => void;
  onCommentChange: (comment: string) => void;
}

export const RatingQuestion: React.FC<RatingQuestionProps> = ({
  question,
  rating,
  comment,
  onRatingChange,
  onCommentChange
}) => {
  return (
    <section className="flex flex-col items-start gap-5 w-full">
      <h3 className="max-w-[800px] w-full text-[#4F4F4F] text-2xl font-normal leading-[34px] max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-[26px]">
        {question}
      </h3>
      <div className="flex flex-col justify-end items-start gap-5 w-full">
        <RatingSlider
          value={rating}
          onChange={onRatingChange}
        />
        <CommentInput
          value={comment}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
};
