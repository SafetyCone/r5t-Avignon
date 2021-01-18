import { JavaScriptHelper } from "./JavaScriptHelper";

export class EnvironmentHelper
{
    public static ClipboardApiExistsForNavigator(navigator: Navigator): boolean
    {
        let clipboardApiExists = JavaScriptHelper.Exists(navigator.clipboard);
        return clipboardApiExists;
    }

    public static ClipboardApiExistsForWindow(window: Window): boolean
    {
        let clipboardApiExists = EnvironmentHelper.ClipboardApiExistsForNavigator(window.navigator);
        return clipboardApiExists;
    }

    public static ClipboardApiExists(): boolean
    {
        let clipboardApiExists = EnvironmentHelper.ClipboardApiExistsForWindow(window);
        return clipboardApiExists;
    }

    public static DOMParserExistsForGlobalThis(global: typeof globalThis): boolean
    {
        let exists = JavaScriptHelper.Exists(global.DOMParser);
        return exists;
    }

    public static DOMParserExists(): boolean
    {
        let exists = EnvironmentHelper.DOMParserExistsForGlobalThis(window);
        return exists;
    }

    public static PermissionsApiExistsForNavigator(navigator: Navigator): boolean
    {
        let permissionsApiExists = JavaScriptHelper.Exists(navigator.permissions);
        return permissionsApiExists;
    }

    public static PermissionsApiExistsForWindow(window: Window): boolean
    {
        let permissionsApiExists = EnvironmentHelper.PermissionsApiExistsForNavigator(window.navigator);
        return permissionsApiExists;
    }

    public static PermissionsApiExists(): boolean
    {
        let permissionsApiExists = EnvironmentHelper.PermissionsApiExistsForWindow(window);
        return permissionsApiExists;
    }
}