import { UserDTO } from './user.model';

export interface ResponseDTO {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserDTO[];
}
