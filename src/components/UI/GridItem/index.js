import React from 'react';
import './index.scss';
//

const GridItem = ({
  children,
  className = '',
  small,
  tablet,
  large,
  xlarge,
  alignSelf,
  justifySelf,
}) => {
  let helperClasses = '';
  helperClasses += small || tablet || large || xlarge ? 'grid-area ' : '';
  helperClasses += justifySelf ? 'justify-self ' : '';
  helperClasses += alignSelf ? 'align-self ' : '';

  return (
    <div
      className={`grid-item ${className} ${helperClasses}`}
      style={{
        '--grid-area': small && `var(--mq-sm) ${small}`,
        '--large-grid-area': tablet && `var(--mq-lg) ${tablet}`,
        '--tablet-grid-area': large && `var(--mq-tb) ${large}`,
        '--xlarge-grid-area': xlarge && `var(--mq-xl) ${xlarge}`,
        '--align-self': alignSelf && alignSelf,
        '--justify-self': justifySelf && justifySelf,
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
