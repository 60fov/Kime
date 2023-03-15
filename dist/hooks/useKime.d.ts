import { type RefObject } from "react";
export interface KimeInput {
    value: string;
    clear: () => void;
    setValue: (v: string) => void;
}
declare const useKime: (inputRef: RefObject<HTMLInputElement>) => {
    input: KimeInput;
    composing: boolean;
};
export default useKime;
