import { Temporal } from '@js-temporal/polyfill';
export interface EnrollmentRecord {
    readonly studentId: string;
    readonly courseCode: string;
    enrolledAt: Temporal.Instant;
}
export type EnrollmentStatus = {
    status: 'PENDING';
    requestedAt: Temporal.Instant;
    studentId: string;
    courseId: string;
} | {
    status: 'APPROVED';
    approvedBy: string;
    approvedAt: Temporal.Instant;
} | {
    status: 'ACTIVE';
    startDate: Temporal.PlainDate;
    currentGrade?: number;
} | {
    status: 'COMPLETED';
    finalGrade: number;
    completedAt: Temporal.Instant;
} | {
    status: 'DROPPED';
    reason: string;
    droppedAt: Temporal.Instant;
};
export declare function describeEnrollment(enrollment: EnrollmentStatus): string;
//# sourceMappingURL=EnrollmentRecord.model.d.ts.map