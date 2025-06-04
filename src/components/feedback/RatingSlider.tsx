import React from 'react';

interface RatingSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const RatingSlider: React.FC<RatingSliderProps> = ({
  value,
  onChange,
  min = 1,
  max = 5
}) => {
  const handleDotClick = (rating: number) => {
    onChange(rating);
  };

  const renderDot = (position: number) => {
    const isSelected = value === position;
    
    return (
      <button
        key={position}
        type="button"
        onClick={() => handleDotClick(position)}
        className="w-6 h-6 relative focus:outline-none focus:ring-2 focus:ring-[#C1272D] focus:ring-offset-2 rounded-full"
        aria-label={`Rating ${position} out of ${max}`}
      >
        <div 
          className={`w-6 h-6 rounded-[20px] border-2 border-solid ${
            isSelected ? 'border-[#C1272D]' : 'border-[#949494]'
          }`}
        />
        {isSelected && (
          <div className="w-3 h-3 rounded-full bg-[#C1272D] absolute left-1.5 top-1.5" />
        )}
      </button>
    );
  };

  const renderLine = () => (
    <div className="flex-1 h-0.5 bg-[#DCDCDC]" />
  );

  return (
    <div className="flex h-11 max-w-[800px] items-center gap-11 w-full max-md:gap-5 max-sm:flex-col max-sm:gap-[15px] max-sm:h-auto">
      <div className="text-black text-[17px] font-normal leading-6 max-md:text-sm max-sm:text-xs">
        NOT HAPPY AT ALL
      </div>
      <div className="flex items-center gap-4 flex-[1_0_0] max-sm:w-full max-sm:max-w-[300px]">
        {renderDot(1)}
        {renderLine()}
        {renderDot(2)}
        {renderLine()}
        {renderDot(3)}
        {renderLine()}
        {renderDot(4)}
        {renderLine()}
        {renderDot(5)}
      </div>
      <div className="text-black text-[17px] font-normal leading-6 max-md:text-sm max-sm:text-xs">
        IT'S AMAZING!
      </div>
    </div>
  );
};
