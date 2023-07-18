import {store} from 'store';

export enum InactivityStatusEnum {
  ACTIVE = 'ACTIVE',
  COUNTDOWN = 'COUNTDOWN',
  TIMEOUT = 'TIMEOUT',
}
export const DEFAULT_INACTIVITY_TIMEOUT = 600000 - 15000;
interface IInactivityStore {
  isOpen: boolean;
  status: InactivityStatusEnum;
  timer: number;
}

const InactivityStore = {
  store: store<IInactivityStore>({
    isOpen: false,
    status: InactivityStatusEnum.ACTIVE,
    timer: DEFAULT_INACTIVITY_TIMEOUT,
  }),
  open: () => {
    InactivityStore.store.isOpen = true;
  },
  close: () => {
    InactivityStore.store.isOpen = false;
  },
  reset: () => {
    InactivityStore.store.isOpen = false;
    InactivityStore.store.status = InactivityStatusEnum.ACTIVE;
    InactivityStore.store.timer = DEFAULT_INACTIVITY_TIMEOUT;
  },
};

export default InactivityStore;
