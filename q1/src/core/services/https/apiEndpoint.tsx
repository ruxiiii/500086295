export class ApiEndpoint {
  public static GET_MICRO_MANAGE: APIDef = {
    method: "GET",
    api: () => `micro-manage`,
  };
}

export interface APIDef {
  method: string;
  api: (ApiInput: ApiInput) => string;
}

export interface ApiInput {
  id?: string;
}
