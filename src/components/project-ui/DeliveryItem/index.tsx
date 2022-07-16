import type { FunctionComponent } from 'react';
import type { DeliveryReceipt } from '@/interfaces';

import style from './style.module.css';

// Component Import
import { TableColumn, TableRow, Chip } from '@/components/ui';

// Moment Import
import moment from 'moment';

export interface DataItemProps {
    dataItem: DeliveryReceipt;
}

const DataItem: FunctionComponent<DeliveryReceipt> = ({
    dr_number,
    status,
    supplier,
    po_number,
    skus,
    quantity_delivered,
    quantity_accepted,
    amount_delivered,
    amount_accepted,
    type,
    delivery_date,
    date_created,
}) => {
    return (
        <TableRow>
            <TableColumn>
                <p className="caption">{dr_number}</p>
            </TableColumn>
            <TableColumn>
                <Chip variant={status === 'delivered' ? 'success' : 'warning'}>
                    {status}
                </Chip>
            </TableColumn>
            <TableColumn>
                <p className="body-1 bold">{supplier}</p>
            </TableColumn>
            <TableColumn>{po_number}</TableColumn>
            <TableColumn>{skus}</TableColumn>
            <TableColumn>{quantity_delivered}</TableColumn>
            <TableColumn>{quantity_accepted}</TableColumn>
            <TableColumn>{'₱' + amount_delivered}</TableColumn>
            <TableColumn>
                {amount_accepted ? `₱${amount_accepted}` : 'N/A'}
            </TableColumn>
            <TableColumn>
                <Chip variant={type === 'full' ? 'success' : 'error'}>
                    {type}
                </Chip>
            </TableColumn>
            <TableColumn>
                {delivery_date
                    ? moment(delivery_date).format('MMMM DD, YYYY')
                    : 'Not Specified'}
            </TableColumn>
            <TableColumn>
                {moment(date_created).format('MMMM DD, YYYY')}
            </TableColumn>
            <TableColumn>
                {delivery_date ? moment(delivery_date).fromNow() : 'N/A'}
            </TableColumn>
            <TableColumn>
                <span className={style.action}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </span>
            </TableColumn>
        </TableRow>
    );
};

export default DataItem;
