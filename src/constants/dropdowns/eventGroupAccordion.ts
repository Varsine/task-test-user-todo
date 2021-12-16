import shortid from 'shortid';

import {OvalImage} from '~/assets';
import {IGroup, IGroupItem} from '~/types/dropdowns';

const groupItems: IGroupItem[] = [
  {
    id: shortid.generate(),
    userID: 1,
    userName: 'Cameron S.',
    title: 'Name of the event that we are going to add',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'pending',
    type: 'verification',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 2,
    userName: 'Cameron S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'executed',
    type: 'verification',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 3,
    userName: 'Williamson S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'non-agreed',
    type: 'receiptOnly',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 4,
    userName: 'Cameron S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'executed',
    type: 'verification',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 5,
    userName: 'Cameron S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'draft',
    type: 'verification',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 6,
    userName: 'Cameron S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'draft',
    type: 'verification',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 7,
    userName: 'Cameron S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'pending',
    type: 'verification',
    image: OvalImage,
  },
  {
    id: shortid.generate(),
    userID: 8,
    userName: 'Cameron S.',
    title: 'Cargo property transferred to party B',
    date: '21 Sep,2020',
    hour: '12:00',
    status: 'pending',
    type: 'verification',
    image: OvalImage,
  },
];

const EventGroupAccordion: IGroup[] = [
  {
    id: 1,
    groupItems,
    groupName: 'Test G',
  },
  {
    id: 2,
    groupItems,
    groupName: 'Test W',
  },
  {
    id: 3,
    groupItems,
    groupName: 'Test E',
  },
  {
    id: 4,
    groupItems,
    groupName: 'Test T',
  },
  {
    id: 5,
    groupItems,
    groupName: 'Test H',
  },
  {
    id: 6,
    groupItems,
    groupName: 'Test Bsdadasdasdasd asdfdsf sdfsf',
  },
];

export default EventGroupAccordion;
