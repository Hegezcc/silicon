import { FC } from 'react';
import { SiliconSpinnerProps } from 'types/spinner';
import { StyledSpinner } from './styles';

export const Spinner: FC<SiliconSpinnerProps> = ({
  color = '#fff',
  size = 'md',
  borderWidth = '3px',
}) => {
  const isNumber = typeof borderWidth === 'number';
  const borderWidthStyle = isNumber ? `${borderWidth}px` : borderWidth;

  const border = `${borderWidthStyle} solid transparent`;
  const borderTop = `${borderWidthStyle} solid ${color}`;

  let spinnerSize = size;
  if (size === 'sm') {
    spinnerSize = '.6em';
  } else if (size === 'md') {
    spinnerSize = '1em';
  } else if (size === 'lg') {
    spinnerSize = '1.2em';
  } else if (size === 'xl') {
    spinnerSize = '1.6em';
  }

  const styles = {
    border,
    borderTop,
    width: spinnerSize,
    height: spinnerSize,
    borderRight: borderTop,
  };

  return <StyledSpinner {...styles} />;
};
