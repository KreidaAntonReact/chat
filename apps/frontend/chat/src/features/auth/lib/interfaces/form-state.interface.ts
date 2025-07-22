export interface IFormData {
    username: string;
    password: string;
}

export interface IFormState {
    data: IFormData | null;
    errors: Record<string, string> | null;
}
