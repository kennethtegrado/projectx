import { FunctionComponent, useEffect, useState } from 'react';
import type { database } from '@/data/database';
import type { DeliveryReceipt } from '@/interfaces';

// Component Import
import { Table, TableRow, TableColumn, Pagination } from '@/components/ui';

// Higher Order Component
const withFetchTableData = (
    data: database,
    searchParams = '',
    ItemComponent: FunctionComponent<DeliveryReceipt>,
    tableHeader: string[]
) => {
    const Component: FunctionComponent = () => {
        const [presentedData, setPresentedData] =
            useState<Array<DeliveryReceipt>>();

        // Fetching on hard-coded database from data.ts only allow usage of 3 pages
        const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);

        //  On component mount, fetch data
        useEffect(() => {
            // Fetch Presented Data with filtering method
            const processedData = data[`page/${currentPage}`].filter((item) =>
                Object.values(item).some((innerItem) =>
                    (innerItem + '').toLowerCase().includes(searchParams)
                )
            );

            setPresentedData(processedData);
        }, []);

        useEffect(() => {
            // Fetch Presented Data with filtering method
            const processedData = data[`page/${currentPage}`].filter((item) =>
                Object.values(item).some((innerItem) =>
                    (innerItem + '').toLowerCase().includes(searchParams)
                )
            );

            setPresentedData(processedData);
        }, [currentPage]);

        const changePage = (page: number) => setCurrentPage(page as 1 | 2 | 3);

        return (
            <div>
                <Table>
                    <TableRow>
                        {tableHeader.map((item) => (
                            <TableColumn header>{item}</TableColumn>
                        ))}
                    </TableRow>
                    {presentedData?.map((item) => (
                        <ItemComponent {...item} />
                    ))}
                </Table>
                <Pagination
                    maxPage={Object.keys(data).length}
                    currentPage={currentPage}
                    changePage={changePage}
                />
            </div>
        );
    };

    return Component;
};

export default withFetchTableData;
