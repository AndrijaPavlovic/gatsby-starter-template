import React from 'react';
import './index.scss';
//

const Flex = ({
  children,
  className = '',
  small,
  tablet,
  large,
  xlarge,
  alignItems,
  justifyContent,
}) => {
  let helperClasses = '';
  helperClasses += small || tablet || large || xlarge ? 'basis ' : '';
  helperClasses += justifyContent ? 'justify-content ' : '';
  helperClasses += alignItems ? 'align-items ' : '';

  return (
    <div
      className={`${className} flex-item ${helperClasses}`}
      style={{
        '--align-items': alignItems && alignItems,
        '--justify-content': justifyContent && justifyContent,
        '--flex-basis': small && `var(--mq-sm) ${small}`,
        '--tablet-flex-basis': tablet && `var(--mq-tb) ${tablet}`,
        '--large-flex-basis': large && `var(--mq-lg) ${large}`,
        '--xlarge-flex-basis': xlarge && `var(--mq-xl) ${xlarge}`,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
