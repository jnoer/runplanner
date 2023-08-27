import {ics} from "./ics";

export default function saveIcs(dates) {
    var cal = ics();

    dates.forEach((date) => {
        cal.addEvent(date?.activity?.toText(), "", "", date.date, date.date);
    });

    cal.download("test.ics");
}