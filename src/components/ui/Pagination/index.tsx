import type { FunctionComponent } from 'react';

// Style import
import style from './style.module.css';

interface PaginationProps {
    maxPage: number;
    currentPage: number;
    changePage: (page: number) => void;
}
const Pagination: FunctionComponent<PaginationProps> = ({
    maxPage,
    currentPage,
    changePage,
}) => {
    const goToPreviousPage = () => {
        if (currentPage === 1) return;

        changePage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage === maxPage) return;

        changePage(currentPage + 1);
    };

    return (
        <div className={style.container}>
            <div
                className={`${style.button} ${
                    currentPage === 1 && style.hidden
                }`}
                onClick={goToPreviousPage}
            >
                &lt;
            </div>
            <div className={style.page}>{currentPage}</div>
            <div
                className={`${style.button} ${
                    currentPage === maxPage && style.hidden
                }`}
                onClick={goToNextPage}
            >
                &gt;
            </div>
        </div>
    );
};

export default Pagination;
