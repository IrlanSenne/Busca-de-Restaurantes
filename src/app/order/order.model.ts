class Order {
        constructor(public adress: string,
                    public number: number,
                    public optional: string,
                    public paymentOptions: string,
                    public name: string,
                    public email: string,
                    public emailConfirmation: string,
                    public orderItem: OrderItem[] =[]
               
         ){}
}

class OrderItem {
    constructor(public quantity: number, public menuId: string){}
}

export { Order, OrderItem }