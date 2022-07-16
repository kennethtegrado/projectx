import type { FormEventHandler, FunctionComponent } from 'react';

import style from './style.module.css';

interface InputGroupProps {
    buttonText: string;
    submitInput: (input: string) => void;
    placeholder?: string;
    name: string;
}

const InputGroup: FunctionComponent<InputGroupProps> = ({
    buttonText,
    submitInput,
    placeholder = '',
    name,
}) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        submitInput(event.currentTarget[name].value);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                className={style.input}
            />
            <button className={style.button}>{buttonText}</button>
        </form>
    );
};

export default InputGroup;
