export declare const jamo: {
    single: string[];
    initial: string[];
    medial: string[];
    final: string[];
    decompositionMaps: {
        ㅘ: string[];
        ㅙ: string[];
        ㅚ: string[];
        ㅝ: string[];
        ㅞ: string[];
        ㅟ: string[];
        ㅢ: string[];
        ㄳ: string[];
        ㄵ: string[];
        ㄶ: string[];
        ㄺ: string[];
        ㄻ: string[];
        ㄼ: string[];
        ㄽ: string[];
        ㄾ: string[];
        ㄿ: string[];
        ㅀ: string[];
        ㅄ: string[];
    };
    complexMaps: {
        ㅗ: {
            ㅏ: string;
            ㅐ: string;
            ㅣ: string;
        };
        ㅜ: {
            ㅓ: string;
            ㅔ: string;
            ㅣ: string;
        };
        ㅡ: {
            ㅣ: string;
        };
        ㄱ: {
            ㅅ: string;
        };
        ㄴ: {
            ㅈ: string;
            ㅎ: string;
        };
        ㄹ: {
            ㄱ: string;
            ㅁ: string;
            ㅂ: string;
            ㅅ: string;
            ㅌ: string;
            ㅍ: string;
            ㅎ: string;
        };
        ㅂ: {
            ㅅ: string;
        };
    };
};
declare function isInitialJamo(j: string): boolean;
declare function isMedialJamo(j: string): boolean;
declare function isFinalJamo(j: string): boolean;
declare function initialJamoOffset(j: string): number;
declare function medialJamoOffset(j: string): number;
declare function finalJamoOffset(j: string): number;
declare function composeJamo(prefix: string, postfix: string): any;
declare function composeSyllable(initial: string, medial: string, final?: string): string | undefined;
declare const composeBlock: (input: string | string[]) => string[];
declare const compose: (blocks: string[], maxIterations?: number) => string[];
declare const decomposeCompatibilityJamo: (cjamo: string) => string[] | undefined;
declare const decomposeBlock: (block: string) => string[];
declare const decompose: (blocks: string) => string[];
export { isInitialJamo, isMedialJamo, isFinalJamo, initialJamoOffset, medialJamoOffset, finalJamoOffset, composeJamo, composeSyllable, composeBlock, compose, decomposeCompatibilityJamo, decomposeBlock, decompose };
