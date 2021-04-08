export type Action = () => void;
export type ActionOn<T> = (value: T) => void;
export type ActionOnTwo<T1, T2> = (value1: T1, value2: T2) => void;