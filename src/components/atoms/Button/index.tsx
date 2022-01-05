import React, { useEffect, useRef, useState } from 'react';
import { SiliconButtonProps } from 'types/button';
import { abbreviation } from 'utils/abbreviation';
import { LeftIconButton, RightIconButton } from './icon.styles';
import { BUTTON_SIZES } from './size.styles';
import { StyledButton, VARIANT_STYLES } from './styles';
import { Spinner } from 'components/atoms/Spinner';
import { LOADING_STYLES } from './loading.styles';

export const Button: React.FC<SiliconButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  text,
  _hover = {},
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  spinnerSize = 'md',
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>();
  const [width, setWidth] = useState(BUTTON_SIZES[size].width);

  const abbreviations: any = abbreviation({ pos: 'relative', width, ...props });
  const abbrHover = abbreviation(_hover);
  const hoverStyles = {
    ':hover': {
      ...abbrHover,
      _hover,
    },
  };

  let loadingStyles = {};
  if (loading) loadingStyles = { ...LOADING_STYLES[variant] };

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth + 'px';
      setWidth(width);
    }
  }, []);

  return (
    <StyledButton
      {...VARIANT_STYLES[variant]}
      {...BUTTON_SIZES[size]}
      {...abbreviations}
      {...hoverStyles}
      {...loadingStyles}
      {...props}
      ref={ref}
    >
      {loading && <Spinner size={spinnerSize} />}

      {leftIcon && !loading && <LeftIconButton>{leftIcon}</LeftIconButton>}
      {loading ? null : text ? text : children}
      {rightIcon && !loading && <RightIconButton>{rightIcon}</RightIconButton>}
    </StyledButton>
  );
};
