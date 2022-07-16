interface FetchDataResponse<Type> {
    status: 200;
    data: Type[];
}

const fetchData = async <Type>(
    data: Type[],
    page: number,
    searchParams = ''
): Promise<FetchDataResponse<Type>> => {
    const filteredData = data.filter((item) =>
        Object.values(item).some((nestedItem) =>
            (nestedItem + '').toLowerCase().includes(searchParams.toLowerCase())
        )
    );

    const paginatedData = filteredData.slice((page - 1) * 10, (page - 1) * 10);

    return { status: 200, data: paginatedData };
};

export default fetchData;
