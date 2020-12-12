import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import { IconStar } from '../Icons';

// eslint-disable-next-line react/display-name
const Rating = React.memo(({
  ratings,
  readOnly,
  selected
}) => {

  const [state, setstate] = useState(parseFloat(selected));

  const ratingClick = (rating) => {
    if (readOnly) return;
    setstate(rating);
  };

  useEffect(() => {
    setstate(selected);
  }, [selected])

  return (
    <span className={`rating ${readOnly ? 'rating-readonly' : 'rating-active'}`}>
      {
        ratings.map(rating => {
          const percentage = Math.floor(state % (rating-1) * 100);
          return (
            <IconStar
              key={rating}
              percentage={((rating - state) < 1) ? percentage : 1}
              classes={rating <= state ? 'filled' : ((rating - state) < 1) ? 'half-filled' : ''}
              rating={rating}
              onClick={() => ratingClick(rating)} />
          );
        })}
    </span>
  );
});

Rating.defaultProps = {
  ratings: [1, 2, 3, 4, 5]
};

Rating.propTypes = {
  ratings: PropTypes.array,
  readOnly: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Rating;
