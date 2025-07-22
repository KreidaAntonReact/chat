export interface IFormData {
    username: string;
    password: string;
}

export interface IFormState {
    data: IFormData | null;
    isSuccess: boolean;
    errors: Record<string, string> | null;
}
