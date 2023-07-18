

import React, {memo} from 'react';
import UserInactivity from 'react-native-user-inactivity';
import {useStore} from 'store/x/react';
import InactivityStore, {
  InactivityStatusEnum,
} from '../../../store/InactivityStore';

type Params = {
  onAction: (active: boolean) => void;
  children: React.ReactNode;
  enableInactivity: boolean;
};
const Inactivity: React.FC<Params> = ({
  onAction,
  children,
  enableInactivity = true,
}) => {
  const {timer, status} = useStore(InactivityStore.store);

  if (!enableInactivity) {
    return <>{children}</>;
  }

  return (
    <UserInactivity
      isActive={status === InactivityStatusEnum.ACTIVE}
      timeForInactivity={timer} // 5secs for testing purposes
      onAction={active => {
        onAction(active);
      }}
      style={{flex: 1}}>
      {children}
    </UserInactivity>
  );
};

Inactivity.displayName = 'Inactivity';
export default memo(Inactivity);
