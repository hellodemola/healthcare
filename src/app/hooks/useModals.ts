import { useState } from 'react';

const useModals = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>();

  const handleModalState = () => setIsShowModal((prev) => !prev);

  return { isShowModal, handleModalState };
};

export default useModals;
