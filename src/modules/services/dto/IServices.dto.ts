interface IServicesDTO {
    id?: string;
    customer_id: string;
    car_id: string;
    wash_id: string;
    value: number;
    start_wash: Date;
    expected_end_wash: Date;
}

export { IServicesDTO }