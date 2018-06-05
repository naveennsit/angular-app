export interface UserModelResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<UserModel>;
}

export interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
