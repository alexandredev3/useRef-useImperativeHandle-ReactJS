import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import Input from './components/Input';
import Modal, { ModalHandels } from './components/Modal';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  // com esse generic o typescript ja vai entender que o nameInputRef e um elemento HTML.
  const acceptTermsRef = useRef({ value: false });
  /* agora que eu ja criei um valor inicial boolean para essa Ref, 
    eu não preciso criar uma interface, porque o typescript ja sabe que isso e um boolean */
  const modalRef = useRef<ModalHandels>(null);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    // nameInputRef.current?.focus();
    // "current" e o estado atual daquela ref.

    /**
     * Estou verificando se o input ref não esta null.
     * porque ate o input ser rendelizado, o nameInputRef vai estar null.
     */

     console.log(nameInputRef.current?.value);
     console.log(acceptTermsRef.current.value);
     // current?.value: pegando o valor do input no momento atual que foi digitado.
  }, [nameInputRef])

  const handleAccept = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [acceptTermsRef]);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <Input 
          ref={nameInputRef}
          name="name"
          label="Nome completo"
          type="text"
          placeholder="Digite seu nome"
        />

        <button type="button" onClick={handleAccept} >
          Aceitar condições
        </button>

        <button 
          type="submit"
        >
          Enviar
        </button>
      </form>

      <button onClick={handleOpenModal}>Abrir Modal</button>
    
      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
