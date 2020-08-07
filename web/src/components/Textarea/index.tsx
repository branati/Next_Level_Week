import React, { TextareaHTMLAttributes } from 'react';


import './styles.css';


// Essa interface, além de criadas as propriedades utilizadas, também herda todos os outros
// atributos feitos em outros Textareas. Dessa forma os Textareas não ficam engessados.
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;

}

// ...rest -----> inclui automaticamente todas as outras propriedades

const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    )
}

export default Textarea;