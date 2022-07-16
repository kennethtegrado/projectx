import { FunctionComponent, useState } from 'react';
import type { database } from '@/data/database';

// Styles import
import style from './style.module.css';

// HOC
import { withFetchTableData } from '@/utils';

// Component Import
import { InputGroup } from '@/components/ui';
import DeliveryItem from '../DeliveryItem';

interface DataTableProps {
    title?: string;
    data: database;
}

const DeliveryTable: FunctionComponent<DataTableProps> = ({ title, data }) => {
    const Headers = [
        'D.R. Number',
        'Status',
        'Supplier',
        'P.O. Number',
        'Total No. Of Skus',
        'Quantity (Delivered)',
        'Quantity (Accepted)',
        'Amount (Delivered)',
        'Amount (Accepted)',
        'Type',
        'Delivery Date',
        'Date Created',
        'eta',
        'Actions',
    ];

    const [search, setSearch] = useState('');

    const TableComponent = withFetchTableData(
        data,
        search,
        DeliveryItem,
        Headers
    );

    const searchTable = (searchParams: string) => {
        setSearch(searchParams.toLowerCase());
    };

    return (
        <section className={style.container}>
            <div className={style['title__container']}>
                <h4 className="heading-four">Delivery Receipts</h4>
                <InputGroup
                    name="search"
                    buttonText="Search"
                    submitInput={searchTable}
                    placeholder="Search keyword..."
                />
            </div>
            <TableComponent />
        </section>
    );
};

export default DeliveryTable;
