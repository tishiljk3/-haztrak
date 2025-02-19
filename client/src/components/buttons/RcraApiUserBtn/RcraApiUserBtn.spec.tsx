import '@testing-library/jest-dom';
import { RcraApiUserBtn } from 'components/buttons';
import React from 'react';
import { cleanup, renderWithProviders, screen } from 'test-utils';
import { vi } from 'vitest';

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

describe('RcraApiUserBtn', () => {
  test('renders', () => {
    renderWithProviders(<RcraApiUserBtn>Click Me</RcraApiUserBtn>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('disabled by default', () => {
    renderWithProviders(<RcraApiUserBtn>Click Me</RcraApiUserBtn>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
  test('is disabled when disabled prop', () => {
    renderWithProviders(<RcraApiUserBtn disabled={true}>Click Me</RcraApiUserBtn>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
  test('is disabled when apiUser=false', () => {
    renderWithProviders(<RcraApiUserBtn>Click Me</RcraApiUserBtn>, {
      preloadedState: {
        rcraProfile: {
          user: 'username',
          phoneNumber: '1231231234',
          apiUser: false,
        },
      },
    });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
