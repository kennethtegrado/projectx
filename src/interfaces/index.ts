export interface DeliveryReceipt {
    dr_number: string;
    status: 'delivered' | 'in transit';
    supplier: string;
    po_number: string;
    skus: string;
    quantity_delivered: number;
    quantity_accepted: number | null;
    amount_delivered: number;
    amount_accepted: null | number;
    type: 'full' | 'empty';
    delivery_date: string | null;
    date_created: string;
}
