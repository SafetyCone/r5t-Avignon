import { Task } from "../Types/Tasks";
import { PromiseHelper } from "./PromiseHelper";

export class TaskHelper
{
    public static DefaultTask: Task = () =>
    {
        return PromiseHelper.Empty;
    };
}