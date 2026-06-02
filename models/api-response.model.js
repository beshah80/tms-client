import { Temporal } from '@js-temporal/polyfill';
export function renderResponse(response, formatter) {
    switch (response.status) {
        case 'loading': return 'Loading...';
        case 'success': return formatter(response.data);
        case 'error': return `Error ${response.statusCode}: ${response.message}`;
    }
}
//# sourceMappingURL=api-response.model.js.map