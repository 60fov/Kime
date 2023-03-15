export declare function buffer<T>([...data]: T[]): {
    data: () => T[];
    isEmpty: () => boolean;
    consume: () => T | undefined;
    peek: (i?: number) => T | undefined;
};
