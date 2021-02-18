export type ElementSelector = (element: HTMLElement) => HTMLElement
export type ElementSelectorAs<T extends HTMLElement> = (element: HTMLElement) => T;