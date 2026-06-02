import { Temporal } from '@js-temporal/polyfill';
export type ApiResponse<T> = {
    status: 'loading';
} | {
    status: 'success';
    data: T;
    fetchedAt: Temporal.Instant;
} | {
    status: 'error';
    message: string;
    statusCode: number;
};
export declare function renderResponse<T>(response: ApiResponse<T>, formatter: (data: T) => string): string;
//# sourceMappingURL=api-response.model.d.ts.map