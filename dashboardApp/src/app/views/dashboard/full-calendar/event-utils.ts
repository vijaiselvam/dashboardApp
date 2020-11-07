import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Raj Birthday',
    date: '2020-11-06'
  },
  {
    id: createEventId(),
    title: 'Anup Anniversary',
    date: '2020-11-03'
  },
  {
    id: createEventId(),
    title: 'Jithesh birthday',
    date: '2020-10-04'
  },
  {
    id: createEventId(),
    title: 'Zaheer Anniversay',
    date: '2020-09-06'
  },
  {
    id: createEventId(),
    title: 'Raj Birthday',
    date: '2020-12-03'
  },
  {
    id: createEventId(),
    title: 'Anup Anniversary',
    date: '2020-07-01'
  },
  {
    id: createEventId(),
    title: 'Jithesh birthday',
    date: '2020-11-11'
  },
  {
    id: createEventId(),
    title: 'Zaheer Anniversay',
    date: '2020-11-13'
  },
  {
    id: createEventId(),
    title: 'Raj Birthday',
    date: '2020-11-20'
  },
  {
    id: createEventId(),
    title: 'Anup Anniversary',
    date: '2020-12-25'
  },
  {
    id: createEventId(),
    title: 'Jithesh birthday',
    date: '2020-12-27'
  },
  {
    id: createEventId(),
    title: 'Zaheer Anniversay',
    date: '2020-12-09'
  },
  {
    id: createEventId(),
    title: 'Raj Birthday',
    date: '2020-12-06'
  },
  {
    id: createEventId(),
    title: 'Anup Anniversary',
    date: '2020-09-02'
  },
  {
    id: createEventId(),
    title: 'Jithesh birthday',
    date: '2020-10-13'
  },
  {
    id: createEventId(),
    title: 'Zaheer Anniversay',
    date: '2020-10-06'
  },
];

export function createEventId() {
  return String(eventGuid++);
}
