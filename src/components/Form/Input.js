import { useState } from 'react';
import styled, { css } from 'styled-components';

const InputStyle = styled.input`
  position: relative;
  z-index: 500;
  background: none;
  display: block;
  width: 100%;
  border: 0.0625rem solid rgba(255, 255, 255, 0.13);
  border-radius: 2.3125rem;
  padding: 0.5em 1rem;
  color: var(--white);
  line-height: 1;
  outline: 0;
  font-weight: 300;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: var(--white);
    `}
  transition: all .3s;
`;

const Input = ({ type, id, value, setValue, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <InputStyle
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      onFocus={() => setFocus(true)}
      isFocused={focus}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
};

export default Input;
