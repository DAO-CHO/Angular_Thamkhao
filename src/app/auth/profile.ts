import { publish } from "rxjs/operators";

export class Profile {

    constructor(
        public id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public confirm_password: string,
        public username: string,
        public phone_number: string,
        public word_at: string,
        public job: string,
        public message: string,
        public avatar: string,
        public show_phone: string,
        public country: string,
        public stripe_customer_id: string,
        public city: string,
        public vat_number: number,
        public twitter: string,
        public facebook: string,
        public google: string,
        public linkedin: string
    ) { }
}