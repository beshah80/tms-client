export interface Quiz{
    kind: 'quiz';
    id: string;
    title:string;
    correctAnswers: number;
    totalQuestions: number;
}

export interface Lab{
    kind: 'lab';
    id: string;
    title:string;
    functionalityScore: number; // 0-100
    codeQualityScore: number;  // 0-100
}

export type AssessmentItem = Quiz | Lab;

export function calculateGrade(item: AssessmentItem): number {
    if (item.kind === 'quiz') {
        return (item.correctAnswers / item.totalQuestions) * 100;
    } else if (item.kind === 'lab') {
        return (item.functionalityScore * 0.7) + (item.codeQualityScore * 0.3);
    }
    throw new Error('Unknown assessment item type');
}
