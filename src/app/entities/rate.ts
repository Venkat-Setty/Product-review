import {IUser} from './user';

export class Rate {
  id?: number;
  user: IUser;
  product_id: number;
  rate = 0;
  comment?: string;
}
