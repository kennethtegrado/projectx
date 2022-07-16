import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import type { DeliveryReceipt } from '@/interfaces';

// Component Import
import { Table, TableRow, TableColumn, Pagination } from '@/components/ui';

// Util function
import fetchData from '@/utils/data/fetchData';
import findPageCount from '@/utils/data/findPageCount';

// Higher Order Component
const withFetchTableData = (
    data: DeliveryReceipt[],
    searchParams = '',
    ItemComponent: FunctionComponent<DeliveryReceipt>,
    tableHeader: string[]
) => {
    const Component: FunctionComponent = () => {
        const [presentedData, setPresentedData] =
            useState<Array<DeliveryReceipt>>();

        // Fetching on hard-coded database from data.ts only allow usage of 3 pages
        const [currentPage, setCurrentPage] = useState(1);
        const [maxPage, setMaxPage] = useState(0);

        //  On component mount, fetch data
        useEffect(() => {
            const invokeFetchFunctions = async () => {
                // Fetch number of pages possible
                setMaxPage(await findPageCount(data, searchParams));
                // Fetch data that will be represented
                const fetchedData = await fetchData(
                    data,
                    currentPage,
                    searchParams
                );
                setPresentedData(fetchedData);
            };

            invokeFetchFunctions();
        }, []);

        // Invoke useEffect on change of currentPage state
        useEffect(() => {
            const invokeFetchFunctions = async () => {
                // Fetch data that will be represented
                setPresentedData(
                    await fetchData(data, currentPage, searchParams)
                );
            };

            invokeFetchFunctions();
        }, [currentPage]);

        const changePage = (page: number) => setCurrentPage(page);

        return (
            <div>
                <Table>
                    <TableRow>
                        {tableHeader.map((item, index) => (
                            <TableColumn header key={index}>
                                {item}
                            </TableColumn>
                        ))}
                    </TableRow>
                    {presentedData?.map((item, index) => (
                        <Fragment key={index}>
                            <ItemComponent {...item} />
                        </Fragment>
                    ))}
                </Table>
                <Pagination
                    maxPage={maxPage}
                    currentPage={currentPage}
                    changePage={changePage}
                />
            </div>
        );
    };

    return Component;
};

export default withFetchTableData;
