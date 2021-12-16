import Image from 'next/image';

import {OvalImage} from '~/assets';
import {CommentInput} from '~/components';

import styles from './CommentForm.module.scss';

const CommentForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <Image src={OvalImage} alt="user" />
      </div>
      <div className={styles.container__input}>
        <CommentInput
          name="comment"
          placeholder="Leave comment"
          className={styles.container__input_fill}
          innerClassName={styles.container__input__erase}
        />
      </div>
    </div>
  );
};

export default CommentForm;
