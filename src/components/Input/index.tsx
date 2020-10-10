import React, { InputHTMLAttributes, forwardRef } from 'react';

/** A Ref no react não e uma propriedade tradicional com as outras. 
 * Eu não posso chegar aqui e colocar um Ref como Propriedade
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// RefForwardingComponent: e um componente que vai receber um Ref.
/**
 * Em nenhum lugar eu estou recebendo a Ref como parametro.
 * E por isso que eu estou fazendo um "Forwarding"(Um encaminhamento) da ref para esse componente.
 */

/**
 * como primeiro parametro vou receber o tipo do elemento, que neste caso e um "HTMLInputElement"
 * E como segundo parametro, nas minhas props, vou receber a minha REF.
 */
const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = ({ 
  name, label, placeholder,...rest 
}, ref) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <input
        ref={ref}
        type="text"
        name="name"
        { ...rest }
      />
    </div>
  );
}

/**
 * E não acaba por ai, não podemos colocar um "export default" no nosso componente.
 * Temos que colocar o input dentro desse forwardRef.
 */
export default forwardRef(Input);
