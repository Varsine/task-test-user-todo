import {useMemo, useCallback, useContext, useState, useRef} from 'react';
import shortid from 'shortid';
import {map, extend} from 'lodash';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';

import {ToastContext} from '~/context';
// import {TrashIcon, UploadIcon} from '~/assets';
import Typography from '~/components/shared/Typography';
import Button from '~/components/shared/Button';

import {EventStates, HandlEventStatesProps} from './handleEvent';
import {ISelectedFile} from './types';
import styles from './UploadDocument.module.scss';

const UploadDocumentForm: React.FC<HandlEventStatesProps> = ({
  changeEventStates,
  setEventState,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<ISelectedFile[]>([]);
  const isEmpty = selectedFiles.length;

  const toastCtx = useContext(ToastContext);
  const uploadRef = useRef<HTMLDivElement | null>(null);

  const handleDeleteDocument = useCallback(
    (id: string) => {
      const modifiedDocuments = selectedFiles.filter((file) => file.id !== id);
      setSelectedFiles(modifiedDocuments);
      toastCtx?.toast('Document deleted');
    },

    [selectedFiles, toastCtx],
  );

  const handleDrop = useCallback(
    (files) => {
      const modifiedFiles = map(files, (file: File) =>
        extend({}, file, {id: shortid.generate()}),
      );

      setSelectedFiles([...modifiedFiles, ...selectedFiles]);

      if (uploadRef.current && uploadRef.current?.scrollTop >= 24) {
        uploadRef.current?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    [selectedFiles],
  );

  const files = useMemo(
    () =>
      selectedFiles?.map(({id, name, size}) => (
        <div key={id} className={styles.container__items}>
          <div>
            <Typography variant="Heading" type="Medium">
              {name}
            </Typography>
            <Typography
              className={styles.container__items__size}
              variant="Heading"
              type="Medium">
              {size} Mb
            </Typography>
          </div>
          {/* <TrashIcon onClick={() => handleDeleteDocument(id)} /> */}
          Icon
        </div>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleDeleteDocument, selectedFiles],
  );

  const handleClick = () => {
    changeEventStates();
  };

  return (
    <>
      <div className={styles.container__wrapper}>
        <Dropzone onDrop={handleDrop}>
          {({getInputProps, getRootProps, isDragActive}) => (
            <div
              {...getRootProps()}
              className={classNames(styles.container, {
                [styles.container__draged]: isDragActive,
              })}>
              <div className={styles.container__content}>
                <div className={styles.container__content__upload}>
                  <input
                    {...getInputProps()}
                    className={styles.container__content__upload__none}
                  />
                  ICON
                  {/* <UploadIcon /> */}
                  <Typography variant="Heading" type="Medium">
                    Upload document
                  </Typography>
                </div>

                <div className={styles.container__content__drop}>
                  <Typography type="Semibold">or drag’n’drop here</Typography>
                </div>
              </div>
            </div>
          )}
        </Dropzone>
        <div className={styles.container__items__wrapper}>{files}</div>
        <div className={styles.container__items__footer}>
          <Button
            onClick={() =>
              setEventState &&
              setEventState(
                selectedFiles.length
                  ? EventStates.PERFORMED
                  : EventStates.EXECUTED,
              )
            }
            type="submit"
            size="medium"
            variant="ghost">
            Cancel
          </Button>

          <Button
            type="submit"
            size="medium"
            variant="primary"
            disabled={!isEmpty}
            onClick={handleClick}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default UploadDocumentForm;
