import React, { SelectHTMLAttributes } from 'react';


import './styles.css';


// Essa interface, além de criadas as propriedades utilizadas, também herda todos os outros
// atributos feitos em outros Selects. Dessa forma os Selects não ficam engessados.
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label:string
    }>;

}

// ...rest -----> inclui automaticamente todas as outras propriedades

const Select: React.FC<SelectProps> = ({name, label, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest} >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => { 
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select;