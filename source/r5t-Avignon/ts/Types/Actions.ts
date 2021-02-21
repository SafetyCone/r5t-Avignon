export type Action = () => void;
export type ActionOn<T> = (value: T) => void;