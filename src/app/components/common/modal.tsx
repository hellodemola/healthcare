import { ReactElement } from 'React';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface IModal {
  children: ReactElement;
  setShowModal: () => void;
}

export default function Modal({ children, setShowModal }: IModal) {
  const closeBox = () => {
    setShowModal();
  };

  window.onpopstate = function () {
    closeBox();
  };
  history.pushState({}, '');
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black bg-opacity-75 fixed z-50 inset-0 text-center">
      <div
        className={
          'modal-container relative flex flex-col items-center bg-white min-w-52 p-4 pt-8 border m-4 overflow-auto rounded-lg'
        }
      >
        <button>
          <FontAwesomeIcon
            icon={faTimes}
            size="xl"
            className="absolute top-2 right-7 text-red-500"
            onClick={closeBox}
          />
        </button>

        {children}
      </div>
    </div>
  );
}
