export interface UserDTO {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const EMPTY_USER: UserDTO = {
  id: -1,
  first_name: '',
  last_name: '',
  avatar: '',
};
