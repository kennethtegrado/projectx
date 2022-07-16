const findPageCount = async <Type>(
    data: Type[],
    searchParams = ''
): Promise<number> => {
    const filteredData = data.filter((item) =>
        Object.values(item).some((nestedItem) =>
            (nestedItem + '').toLowerCase().includes(searchParams.toLowerCase())
        )
    );

    return Math.round(filteredData.length / 10);
};
export default findPageCount;
