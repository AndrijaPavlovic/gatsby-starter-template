import React from 'react';
import './index.scss';
//

const GridContainer = ({
  children,
  className = '',
  small,
  tablet,
  large,
  xlarge,
  justifyContent,
  alignItems,
}) => {
  let helperClasses = '';
  helperClasses += small || tablet || large || xlarge ? 'grid-prop ' : '';
  helperClasses += justifyContent ? 'justify-content-grid ' : '';
  helperClasses += alignItems ? 'align-items-grid ' : '';

  return (
    <div
      className={`${className} ${helperClasses} grid`}
      style={{
        '--gap': small.split(',')[1] && `${small.split(',')[1]}`,
        '--grid': small && `var(--mq-sm) ${small.split(',')[0]}`,
        '--large-grid': tablet && `var(--mq-lg) ${tablet.split(',')[0]}`,
        '--tablet-grid': large && `var(--mq-tb) ${large.split(',')[0]}`,
        '--xlarge-grid': xlarge && `var(--mq-xl) ${xlarge.split(',')[0]}`,
        '--align-items': alignItems && alignItems,
        '--justify-items': justifyContent && justifyContent,
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
