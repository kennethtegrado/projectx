const findPageCount = async <Type>(
    data: Type[],
    searchParams = ''
): Promise<number> => {
    const filteredData = data.filter((item) =>
        Object.values(item).some((nestedItem) =>
            (nestedItem + '').toLowerCase().includes(searchParams.toLowerCase())
        )
    );
    const pageCount = Math.round(filteredData.length / 10);

    if (pageCount === 0) return 1;

    return pageCount;
};
export default findPageCount;
