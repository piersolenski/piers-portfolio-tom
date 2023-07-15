import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  appearance: none;
  white-space: nowrap;
  border: 1px solid #ffffff90;
  padding: 0.6em 1.2rem;
  text-align: center;
  font-weight: bold;
  outline: none;
  display: inline-block;
  font-size: 14px;
  font-size: 700;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 24px;
  transition: border 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
  }
  &:active {
    border-color: ${({ theme }) => theme.colors.white};
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const getElement = (href, onClick, to) => {
  if (href) return 'a';
  if (onClick) return 'button';
  if (to) return Link;
  return 'div';
};

export default function Button({
  className,
  children,
  href,
  onClick,
  target,
  type,
  to,
}) {
  return (
    <Wrapper
      as={getElement(href, onClick, to)}
      className={className}
      href={href}
      onClick={onClick}
      target={target}
      to={to}
      type={type}
    >
      {children}
{' '}
→
</Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};
