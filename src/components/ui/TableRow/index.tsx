import type { FunctionComponent, ReactNode } from 'react';

// Style import
import style from './style.module.css';

interface TableRowProps {
    children: ReactNode;
}

const TableRow: FunctionComponent<TableRowProps> = ({ children }) => {
    return <tr className={style['table__row']}>{children}</tr>;
};

export default TableRow;
