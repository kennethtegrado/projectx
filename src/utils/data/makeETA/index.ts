/**
 * It takes a delivery date and returns a string that says how many days until the delivery date
 * @param {Date | undefined} deliveryDate - Date | undefined
 * @returns A function that returns a promise that resolves to a string or 'n/a'
 */
const makeETA = async (
    deliveryDate: Date | undefined
): Promise<string | 'n/a'> => {
    if (!deliveryDate) return 'n/a';

    const presentDate = new Date();

    if (+presentDate > +deliveryDate)
        return 'Package should already be delivered';

    const eta = Math.floor((+deliveryDate - +presentDate) / 8.64e7);

    return `${eta} day${eta > 1 ? 's' : ''}`;
};

export default makeETA;
