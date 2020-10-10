import React, { 
  forwardRef,
  useCallback, 
  useState,
  useImperativeHandle
} from 'react';

// são quais metodos eu vou expor para o componente Pai.
export interface ModalHandels {
  openModal: () => void;
}

/**
 * como segundo parametro podemos receber as propriedades do modal, como titulo, conteudo, etc...
 */
const Modal: React.RefForwardingComponent<ModalHandels> = ({}, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsVisible(true);
  }, [isVisible]);

  /**
   * como Primeiro parametro colocamos a nossa ref que estamos recebendo.
   * como Segundo parametro e uma função que retorna os metodos que queromos expor para o componente Pai.
   */
  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  });

  const handleCloseModal = useCallback(() => {
    setIsVisible(false);
  }, [isVisible])

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      Modal Aberto!

      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  );
}

export default forwardRef(Modal);
