import type { FunctionComponent } from 'react';

// Component Import
import { DeliveryTable } from '@/components/project-ui';

// Data Import
import database from '@/data/database';

const DeliveryReceipt: FunctionComponent = () => {
    return (
        <>
            <DeliveryTable data={database} />
        </>
    );
};

export default DeliveryReceipt;
