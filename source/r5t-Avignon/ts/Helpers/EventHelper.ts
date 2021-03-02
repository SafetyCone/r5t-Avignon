import { HtmlElementEvent } from "../Types/HtmlElementEvent";

export class EventHelper
{
    public static readonly ChangeEventName = "change";

    public static NewChangeEvent()
    {
        let event = new Event(EventHelper.ChangeEventName);
        return event;
    }

    public static DispatchChange(element: HTMLElement)
    {
        let changeEvent = EventHelper.NewChangeEvent();

        element.dispatchEvent(changeEvent);
    }

    public static DispatchEvent(element: HTMLElement, event: HtmlElementEvent)
    {
        let eventObject = new Event(event);

        element.dispatchEvent(eventObject);
    }
}