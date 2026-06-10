export function validateEnrollment(enrollment: any): boolean {
    // Implementation for enrollment validation
    if (typeof enrollment !== 'object' || enrollment === null) {
        return false;
    }
    return true;
}