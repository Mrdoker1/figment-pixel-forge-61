import React, { useState } from 'react';
import { FeedbackHeader } from './FeedbackHeader';
import { RatingQuestion } from './RatingQuestion';
import { SubmitButton } from './SubmitButton';

interface FeedbackData {
  initialComment: string;
  questions: {
    rating: number;
    comment: string;
  }[];
}

const questions = [
  "How happy are you with the current speed of the team?",
  "How would you rate the team members' skill level?",
  "Based on your experience with the team, how would you assess their independence and self-sufficiency in doing their work?",
  "How proactive is the team? Do they make valuable contributions to the project or just follow instructions?",
  "How would you rate the team's adherence to established best practices and conventions?",
  "How would you rate the quality of the team's communications?",
  "How would you rate the quality of the team's deliverables?"
];

export const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    initialComment: '',
    questions: questions.map(() => ({ rating: 2, comment: '' }))
  });

  const handleInitialCommentChange = (comment: string) => {
    setFormData(prev => ({
      ...prev,
      initialComment: comment
    }));
  };

  const handleRatingChange = (questionIndex: number, rating: number) => {
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.map((q, index) =>
        index === questionIndex ? { ...q, rating } : q
      )
    }));
  };

  const handleCommentChange = (questionIndex: number, comment: string) => {
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.map((q, index) =>
        index === questionIndex ? { ...q, comment } : q
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your feedback!');
  };

  return (
    <div className="flex w-[1440px] flex-col items-center min-h-screen bg-white pb-10 max-md:w-full max-md:px-5 max-md:py-0 max-sm:px-[15px] max-sm:py-0">
      <div className="flex flex-col justify-center items-center gap-8 w-full pb-16">
        <FeedbackHeader
          initialComment={formData.initialComment}
          onInitialCommentChange={handleInitialCommentChange}
        />
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start gap-[60px] w-full px-[30px] py-0 max-md:gap-10 max-md:px-5 max-md:py-0 max-sm:gap-[30px] max-sm:px-[15px] max-sm:py-0"
        >
          {questions.map((question, index) => (
            <RatingQuestion
              key={index}
              question={question}
              rating={formData.questions[index].rating}
              comment={formData.questions[index].comment}
              onRatingChange={(rating) => handleRatingChange(index, rating)}
              onCommentChange={(comment) => handleCommentChange(index, comment)}
            />
          ))}
          
          <SubmitButton onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};
