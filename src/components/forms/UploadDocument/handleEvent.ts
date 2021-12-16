export type PerformanceClauseDetailsContainerProps = {
  clause: string;
  ticket: string;
};

export enum EventStates {
  UPLOAD = 'upload',
  EXECUTED = 'executed',
  PERFORMED = 'performed',
}

export type HandlEventStatesProps = {
  changeEventStates: () => void;
  setEventState?: (eventState: EventStates) => void;
};
