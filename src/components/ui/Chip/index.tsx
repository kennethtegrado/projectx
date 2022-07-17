import type { FunctionComponent, ReactNode } from 'react';

import style from './style.module.css';

interface ChipProps {
    children: ReactNode;
    variant?: 'success' | 'error' | 'warning';
}

const Chip: FunctionComponent<ChipProps> = ({
    children,
    variant = 'success',
}) => {
    return (
        <span className={`${style.container} ${style[variant]}`}>
            {children}
        </span>
    );
};

export default Chip;
