import React from 'react';

import {UserApproval, CommentForm} from '~/components';

import commentFiles from './commentFiles';
import styles from './LeaveComments.module.scss';

const LeaveComments: React.FC = () => {
  return (
    <div className={styles.container}>
      <CommentForm />

      <div>
        <UserApproval
          files={commentFiles}
          name="Jonathan S. (You)"
          date="12.12.2021 - 12:00"
          event="Has approved draft event."
        />
        <UserApproval
          name="Jonathan S. (You)"
          date="12.12.2021 - 12:00"
          event="Has approved draft event."
        />
        <UserApproval
          files={commentFiles}
          name="Jonathan S. (You)"
          date="12.12.2021 - 12:00"
          event="Has approved draft event."
        />
        <UserApproval
          name="Jonathan S. (You)"
          date="12.12.2021 - 12:00"
          event="Has approved draft event."
        />
        <UserApproval
          name="Jonathan S. (You)"
          date="12.12.2021 - 12:00"
          event="Has approved draft event."
        />
      </div>
    </div>
  );
};

export default LeaveComments;
