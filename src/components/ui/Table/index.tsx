import type { FunctionComponent, ReactNode } from 'react';
import style from './style.module.css';

interface TableProps {
    children: ReactNode;
}

const Table: FunctionComponent<TableProps> = ({ children }) => {
    return (
        <div className={style['table__container']}>
            <table className={style.table}>{children}</table>
        </div>
    );
};

export default Table;
