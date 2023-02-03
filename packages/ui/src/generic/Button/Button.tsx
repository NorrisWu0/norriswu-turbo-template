import React from 'react';

import { Button as CKButton, Text } from '@chakra-ui/react';

export type ButtonVariants = keyof typeof propsVariant;

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  variant?: ButtonVariants;
  flex?: number;
  width?: string;
  size?: 'lg' | 'md' | 'sm';
};

const propsVariant = {
  primary: {
    button: {
      bg: '#55698C',
      _hover: {
        bg: '#3E4C65',
      },
      _active: {
        bg: '#364154',
      },
    },
    text: {
      fontWeight: 600,
    },
  },
  accent: {
    button: {
      bg: 'linear-gradient(180deg, #FF3F66 0%, #E75784 100%)',
      boxShadow: '0px 10px 10px rgba(251, 68, 109, 0.2)',
      _hover: {
        bg: 'linear-gradient(180deg, #C43352 0%, #C43352 100%)',
        boxShadow: 'none',
      },
      _active: {
        bg: 'linear-gradient(180deg, #AE2F4B 0%, #AE2F4B 100%)',
        boxShadow: 'none',
      },
    },
    text: {
      fontWeight: 700,
    },
  },
  gradient: {
    button: {
      minW: '10px',
      bg: 'linear-gradient(90deg, #465E79 0%, #4B3F4F 100%)',
      _hover: {
        boxShadow: '0px 0px 10px #475E79',
      },
      _active: {
        boxShadow: '0px 0px 4px #475E79',
      },
    },
    text: {
      fontWeight: 700,
    },
  },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  const sizes = {
    lg: '56px',
    md: '40px',
    sm: '30px',
  };

  return (
    <CKButton
      flex={1}
      borderRadius="10px"
      p="12px"
      minW={{ base: '0', sm: '140px', '2xl': '180px' }}
      h={sizes[size]}
      color="#F8F5F1"
      _disabled={{
        opacity: 1,
        bg: '#DADEE0',
        color: '#A2A7AE',
        boxShadow: 'none',
      }}
      {...propsVariant[variant].button}
      {...props}
    >
      <Text fontSize="16" {...propsVariant[variant].text}>
        {children}
      </Text>
    </CKButton>
  );
}
