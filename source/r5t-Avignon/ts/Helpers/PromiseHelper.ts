import { PromiseState } from "../Enumerations/PromiseState";
import { Action } from "../Types/Actions";

export class PromiseHelper
{
    /**
     * Here is an example promise resolve:
     * let promise = new Promise<void>(((resolve: PromiseResolve) =>
        {
            this.ResolveRun = resolve;
        }).bind(this));
     */

    /**
     * Returns an empty promise.
     */
    public static Empty = new Promise<void>((resolve) =>
    {
        resolve();
    });

    public static FromValue<T>(value: T): Promise<T>
    {
        let promise = new Promise<T>((resolve) =>
        {
            resolve(value);
        });
        return promise;
    }

    public static GetState<T>(promise: Promise<T>): Promise<PromiseState>
    {
        // Source: https://stackoverflow.com/a/35820220/10658484
        const test = {};
        return Promise.race([promise, test])
            .then((value) =>
            {
                let output = (value === test)
                    ? PromiseState.Pending
                    : PromiseState.Fulfilled;
                return output;
            }, () =>
            {
                return PromiseState.Rejected;
            });
    }

    public static async IsPending<T>(promise: Promise<T>): Promise<boolean>
    {
        let state = await PromiseHelper.GetState(promise);

        let isPending = state == PromiseState.Pending;
        return isPending;
    }

    public static async IsResolved<T>(promise: Promise<T>): Promise<boolean>
    {
        let isPending = await PromiseHelper.IsPending(promise);
        
        let isResolved = !isPending;
        return isResolved;
    }

    public static async IfPending<T>(promise: Promise<T>, ifPendingAction: Action): Promise<T>
    {
        let isPending = PromiseHelper.IsPending(promise);
        if(isPending)
        {
            ifPendingAction();
        }

        return promise;
    }
}