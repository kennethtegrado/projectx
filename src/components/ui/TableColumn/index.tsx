import type { FunctionComponent, ReactNode } from 'react';
import style from './style.module.css';

interface TableColumnProps {
    children: ReactNode;
    header?: undefined | true;
}
const TableColumn: FunctionComponent<TableColumnProps> = ({
    children,
    header,
}) => {
    if (header)
        return (
            <th
                className={`${style['table__column']} ${style['table__column-header']} caption`}
            >
                {children}
            </th>
        );
    return (
        <td
            className={`${style['table__column']} ${style['table__column-item']} caption`}
        >
            {children}
        </td>
    );
};

export default TableColumn;
