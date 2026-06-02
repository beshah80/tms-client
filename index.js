import { Temporal } from '@js-temporal/polyfill';
import { calculateGrade } from './models/assessment.model.js';
import { describeEnrollment } from './models/EnrollmentRecord.model.js';
import { describeCourse } from './models/course.model.js';
import { renderResponse } from './models/api-response.model.js';
// data
// const validData   = { id: 'STU-001', name: 'Selamawit Mesfin', enrollmentDate: Temporal.Now.instant(), gpa: 3.8 };
// const missingGpa  = { id: 'STU-002', name: 'Abebe Girma',      enrollmentDate: Temporal.Now.instant() };
// const wrongType   = { id: 'STU-003', name: 'Tigist Alemu',     enrollmentDate: Temporal.Now.instant(), gpa: 'N/A' };
// // processing with any
// function processWithAny(data: any) {
//     console.log(`[any] ${data.name} — GPA: ${data.gpa.toFixed(2)}`);
// }
// processWithAny(validData);   
// processWithAny(missingGpa);  
// processWithAny(wrongType);
// //unknown
// function processStudent(data:unknown) {
//     const d = data as Record<string, unknown>;
//     if(typeof d['gpa']! === 'number'){
//         console.log('Rejected - data is not a number')
//         return;
//     }
//     console.log(`${d['name']} — GPA: ${(d['gpa'] as number).toFixed(2)}`);
// }
// processStudent(validData);
// processStudent(missingGpa);
// processStudent(wrongType);
// //type guard
// function isStudent(value: unknown): value is Student {
//     return (
//         typeof value === 'object' && value !== null &&
//         'id'   in value && typeof (value as any).id   === 'string' &&
//         'name' in value && typeof (value as any).name === 'string' &&
//         'gpa'  in value && typeof (value as any).gpa  === 'number'
//     );
// }
// //process with type guard
// function processWithTypeGuard(data: unknown) {
//     if (!isStudent(data)) {
//         console.log('Rejected - data does not conform to Student interface');
//         return;
//     }
//     console.log(`${data.name} — GPA: ${data.gpa.toFixed(2)}`);
// }
// processWithTypeGuard(validData);
// processWithTypeGuard(missingGpa);
// processWithTypeGuard(wrongType);
// ── Exercise 4: Discriminated Unions ─────────────────────────────────────────
const quiz = {
    id: 'QUIZ-001', kind: 'quiz', title: 'SQL Basics',
    correctAnswers: 8, totalQuestions: 10,
};
const lab = {
    id: 'LAB-001', kind: 'lab', title: 'REST API Project',
    functionalityScore: 85, codeQualityScore: 90,
};
console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // 80
console.log(`Lab grade:  ${calculateGrade(lab)}%`); // 87
// quiz.id = 'QUIZ-999'; // ← uncomment to see readonly compiler error
// ── Exercise 5: Enrollment Lifecycle ─────────────────────────────────────────
const pending = {
    status: 'PENDING', requestedAt: Temporal.Now.instant(),
    studentId: 'STU-001', courseId: 'CRS-101',
};
console.log(describeEnrollment(pending));
const active = {
    status: 'ACTIVE', startDate: Temporal.PlainDate.from('2026-09-01'), currentGrade: 88,
};
console.log(describeEnrollment(active));
// ── Exercise 5B: Course Lifecycle ────────────────────────────────────────────
const webDev = {
    status: 'ACTIVE', enrolledCount: 28,
    startDate: Temporal.PlainDate.from('2026-09-01'),
};
console.log(describeCourse(webDev));
// ── Exercise 6: Generic ApiResponse ──────────────────────────────────────────
const studentRes = {
    status: 'success',
    data: { id: 'STU-001', name: 'Dawit Bekele', enrollmentDate: Temporal.Now.instant(), gpa: 3.4 },
    fetchedAt: Temporal.Now.instant(),
};
console.log(renderResponse(studentRes, (s) => `${s.name} GPA: ${s.gpa ?? 'N/A'}`));
const courseListRes = {
    status: 'success',
    data: [{ id: 'CRS-101', title: 'Web Development Fundamentals', capacity: 30, startDate: Temporal.PlainDate.from('2026-09-01') }],
    fetchedAt: Temporal.Now.instant(),
};
console.log(renderResponse(courseListRes, (courses) => courses.map((c) => c.title).join(', ')));
const errorRes = { status: 'error', message: 'Not found', statusCode: 404 };
console.log(renderResponse(errorRes, (s) => s.name));
// ── Exercise 7: Temporal Timestamps ──────────────────────────────────────────
const approvedAt = Temporal.Now.instant();
console.log(`Approved at (UTC): ${approvedAt}`);
const addisTime = approvedAt.toZonedDateTimeISO('Africa/Addis_Ababa');
const londonTime = approvedAt.toZonedDateTimeISO('Europe/London');
console.log(`Addis:  ${addisTime.toPlainTime()}`);
console.log(`London: ${londonTime.toPlainTime()}`);
const courseStart = Temporal.PlainDate.from('2026-09-01');
const today = Temporal.Now.plainDateISO();
const daysUntilStart = today.until(courseStart).total({ unit: 'days' });
console.log(`${Math.floor(daysUntilStart)} days until course starts`);
const deadline = Temporal.PlainDate.from('2026-12-15');
const remaining = today.until(deadline);
console.log(`${remaining.total({ unit: 'days' })} days until assignment is due`);
//# sourceMappingURL=index.js.map