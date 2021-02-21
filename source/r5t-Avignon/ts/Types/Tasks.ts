export type Task = () => Promise<void>;
export type TaskFor<T> = () => Promise<T>;