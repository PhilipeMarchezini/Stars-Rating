import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const StarsRating = ({ numOfStars = 5 }: { numOfStars?: number }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const handleMouseOver = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex w-full items-center justify-center cursor-pointer">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <div>
            <FaStar
              color={`${index <= rating || index <= hover ? '#fad223' : ''}`}
              onClick={() => handleClick(index)}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          </div>
        );
      })}
    </div>
  );
};
