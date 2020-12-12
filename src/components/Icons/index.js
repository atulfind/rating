import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { COLORS ,FN} from '../../constants';


export const IconStar = ({
  fill = '#25282E33',
  startFill = COLORS.primary,
  endFill = COLORS.primaryGradient,
  classes,
  percentage,
  onClick = FN
}) => {

  return (
    <svg className={`icon icon-star ${classes}`} onClick={onClick} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-fill" gradientTransform="rotate(0)">
          <stop offset='0%' stopColor={startFill} />
          <stop offset='100%' stopColor={endFill} />
        </linearGradient>
        {
          percentage > 0 && percentage < 100 ?
            <linearGradient id="grad-half" gradientTransform="rotate(0)">
              <stop offset={`${percentage}%`} stopColor={startFill} />
              <stop offset={'0%'} stopColor={fill} />
            </linearGradient> : ''
        }
      </defs>
      <path d="M17.6429 6.5741C17.6429 6.25602 17.3036 6.12878 17.0491 6.08637L11.7266 5.31238L9.34096 0.488158C9.24554 0.286708 9.06529 0.053449 8.82143 0.053449C8.57757 0.053449 8.39732 0.286708 8.3019 0.488158L5.91629 5.31238L0.59375 6.08637C0.328683 6.12878 0 6.25602 0 6.5741C0 6.76494 0.137835 6.94519 0.265067 7.08303L4.12444 10.8364L3.21261 16.1377C3.20201 16.2119 3.19141 16.2755 3.19141 16.3498C3.19141 16.6254 3.32924 16.8799 3.63672 16.8799C3.78516 16.8799 3.92299 16.8269 4.06083 16.7527L8.82143 14.2504L13.582 16.7527C13.7093 16.8269 13.8577 16.8799 14.0061 16.8799C14.3136 16.8799 14.4408 16.6254 14.4408 16.3498C14.4408 16.2755 14.4408 16.2119 14.4302 16.1377L13.5184 10.8364L17.3672 7.08303C17.505 6.94519 17.6429 6.76494 17.6429 6.5741Z" fill={fill} />
    </svg>
  );
};

IconStar.propTypes = {
  fill: PropTypes.string,
  startFill: PropTypes.string,
  endFill: PropTypes.string,
  classes: PropTypes.string,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};
