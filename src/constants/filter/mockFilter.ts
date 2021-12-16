import {IFilter} from './filterType';

const option: IFilter[] = [
  {
    id: 1,
    name: 'events',
    shownName: 'Event',
    subItems: [
      {
        id: 1,
        name: 'draft',
        shownName: 'Draft',
      },
      {
        id: 2,
        name: 'active',
        shownName: 'Active',
      },
      {
        id: 3,
        name: 'inactive',
        shownName: 'inActive',
      },
      {
        id: 4,
        name: 'pending',
        shownName: 'Pending',
      },
      {
        id: 5,
        name: 'blocked',
        shownName: 'Blocked',
      },
    ],
    isTick: true,
  },
  {
    id: 2,
    name: 'status',
    shownName: 'Status',
    subItems: [
      {
        id: 1,
        name: 'item2',
        shownName: 'Item2',
      },
      {
        id: 2,
        name: 'item3',
        shownName: 'Item3',
      },
      {
        id: 3,
        name: 'item4',
        shownName: 'Item4',
      },
      {
        id: 4,
        name: 'item5',
        shownName: 'Item4',
      },
      {
        id: 5,
        name: 'item6',
        shownName: 'Item6',
      },
    ],
    isTick: true,
  },
  {
    id: 2,
    name: 'type',
    shownName: 'Type',
    subItems: [
      {
        id: 1,
        name: 'itema',
        shownName: 'Itema',
      },
      {
        id: 2,
        name: 'itemb',
        shownName: 'ItemB',
      },
      {
        id: 3,
        name: 'itemc',
        shownName: 'ItemC',
      },
      {
        id: 4,
        name: 'itemd',
        shownName: 'ItemD',
      },
      {
        id: 5,
        name: 'iteme',
        shownName: 'ItemE',
      },
    ],
    isTick: true,
  },
  {
    id: 2,
    name: 'rights transfered',
    shownName: 'Rights Transfered',
    subItems: [
      {
        id: 1,
        name: 'itemi',
        shownName: 'ItemI',
      },
      {
        id: 2,
        name: 'itemj',
        shownName: 'ItemJ',
      },
      {
        id: 3,
        name: 'itemk',
        shownName: 'ItemK',
      },
      {
        id: 4,
        name: 'itemh',
        shownName: 'ItemH',
      },
      {
        id: 5,
        name: 'iteml',
        shownName: 'ItemL',
      },
    ],
    isTick: true,
  },
];

export default option;
