export interface DeliveryReceipt {
    dr_number: string;
    status: 'delivered' | 'in transit';
    supplier: string;
    po_number: string;
    skus: string;
    quantity_delivered: number;
    quantity_accepted: number;
    amount_delivered: number;
    amount_accepted: undefined | number;
    type: 'full' | 'not full';
    delivery_date: Date | undefined;
    date_created: Date;
}
