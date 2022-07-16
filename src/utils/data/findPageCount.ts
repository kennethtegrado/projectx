const findPageCount = async <Type>(data: Type[]): Promise<number> => {
    return Math.round(data.length);
};
export default findPageCount;
