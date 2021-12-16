import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';

const refreshTokenApi = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {headers} = req;

  try {
    const {data, headers: returnedHeaders} = await axios.post(
      'http://localhost:3001/auth/refresh-token',
      undefined,
      {
        headers,
      },
    );

    Object.keys(returnedHeaders).forEach((key) =>
      res.setHeader(key, returnedHeaders[key]),
    );

    res.status(200).json(data);
  } catch (error) {
    res.send(error);
  }
};

export default refreshTokenApi;
