import useModals from '@/app/hooks/useModals';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('useModals', () => {
  test('CHANGE_STATE_RETURNS_OPPOSITE_OF_CURRENT_STATE', () => {
    const { result } = renderHook(() => useModals());
    act(() => {
      result.current.handleModalState();
    });
    expect(result.current.isShowModal).toBe(true);
    act(() => {
      result.current.handleModalState();
    });
    expect(result.current.isShowModal).toBe(false);
  });
});
