import React, { InputHTMLAttributes } from 'react';


import './styles.css';


// Essa interface, além de criadas as propriedades utilizadas, também herda todos os outros
// atributos feitos em outros inputs. Dessa forma os inputs não ficam engessados.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

}

// ...rest -----> inclui automaticamente todas as outras propriedades

const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    )
}

export default Input;