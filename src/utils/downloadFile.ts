import axios from 'axios';

const downloadFile = (fileUrl: string, fileName: string): void => {
  axios({
    url: fileUrl,
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', fileName);

    document.body.appendChild(link);

    link.click();
  });
};

export default downloadFile;
