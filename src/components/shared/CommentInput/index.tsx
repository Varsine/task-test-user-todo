import React, {useState, useMemo, useCallback, useContext, useRef} from 'react';
import shortid from 'shortid';
import classNames from 'classnames';
import {toArray, map, extend} from 'lodash';

import {ToastContext} from '~/context';
import {AttachIcon, TrashIcon} from '~/assets';

import Button from '../Button';
import Typography from '../Typography';

import styles from './CommentInput.module.scss';
import {ICommentInputProps, ISelectedFile} from './types';

const CommentInput: React.FC<ICommentInputProps> = ({
  name,
  error,
  disabled,
  placeholder,
  type = 'text',
  className = '',
  innerClassName = '',
}) => {
  const toastCtx = useContext(ToastContext);
  const docsRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState<ISelectedFile[]>([]);

  const handleDeleteDocument = useCallback(
    (id: string) => {
      const modifiedDocuments = selectedFiles.filter((file) => file.id !== id);
      setSelectedFiles(modifiedDocuments);
      toastCtx?.toast('Document deleted');
    },

    [selectedFiles, toastCtx],
  );

  const myDocs = useMemo(
    () =>
      selectedFiles.map(({id, name, size}) => (
        <div key={id} className={styles.textarea__wrapper__document}>
          <div>
            <Typography
              variant="Text"
              type="Semibold"
              className={styles.textarea__wrapper__document__name}>
              {name}
            </Typography>
            <Typography
              className={styles.textarea__wrapper__document__size}
              variant="Text"
              type="Semibold">
              {size} Mb
            </Typography>
          </div>
          <div>
            <TrashIcon onClick={() => handleDeleteDocument(id)} />
          </div>
        </div>
      )),
    [handleDeleteDocument, selectedFiles],
  );

  const handleAreaClick = () => {
    setIsExpanded(true);
  };

  const inputClasses = classNames(styles.container, {
    [className]: className,
    [styles.container__error]: !!error,
  });

  const inputInnerClasses = classNames(styles.container__inner, {
    [innerClassName]: innerClassName,
    [styles.container__inner__error]: !!error,
    [styles.container__inner_disabled]: disabled,
  });

  const handleFileChange = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      const files = toArray(event.currentTarget.files);
      const modifiedFiles = map(files, (file: File) =>
        extend({}, file, {id: shortid.generate()}),
      );

      setSelectedFiles([...modifiedFiles, ...selectedFiles]);

      if (docsRef.current && docsRef.current?.scrollTop >= 12) {
        docsRef.current?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    [selectedFiles],
  );

  return (
    <div className={inputInnerClasses}>
      {!isExpanded ? (
        <input
          readOnly
          id={name}
          name={name}
          type={type}
          autoComplete="off"
          disabled={disabled}
          className={inputClasses}
          placeholder={placeholder}
          onClick={handleAreaClick}
        />
      ) : (
        <div className={styles.textarea__wrapper}>
          <textarea placeholder="Leave comment" className={styles.textarea} />
          <div ref={docsRef} className={styles.textarea__box}>
            {myDocs}
          </div>
          <div className={styles.textarea__wrapper__content}>
            <label>
              <input
                className={styles.textarea__hidden}
                type="file"
                name="file"
                onChange={handleFileChange}
                multiple
              />
              <AttachIcon className={styles.textarea__wrapper__content__icon} />
            </label>
            <Button
              onClick={() => setIsExpanded(false)}
              variant="ghost"
              className={styles.textarea__wrapper__content__cancel}>
              Cancel
            </Button>
            <Button
              className={styles.textarea__wrapper__content__save}
              type="submit"
              onClick={() => setIsExpanded(false)}
              size="small"
              variant="primary">
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentInput;
