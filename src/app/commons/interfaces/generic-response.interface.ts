export interface IGenericResponse<T> {
  success: boolean;
  message: string;
  data: T;
  totalRecords?: number;
}
// export interface IGenericResponse2 {
//   success: boolean;
//   message: string;
// }

export interface IGenericResponseTwo
  extends Omit<IGenericResponse<any>, 'data' | 'totalRecords'> {}
