import {NextApiRequest, NextApiResponse} from 'next';

const loginApi = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {body} = req;

  if (body.email === 'secro@gmail.com' && body.password === 'secro') {
    res.send({accessToken: 'access938249238yhbdfnsm'});
  } else {
    res.status(422).json({
      data: 'Email or password is incorrect',
    });
  }

  //   try {
  //     const {data, headers: returnedHeaders} = await axios.post(
  //       'http://localhost:3001/auth/login',
  //       body,
  //       {headers},
  //     );

  //     Object.entries(returnedHeaders).forEach((keyArr) =>
  //       res.setHeader(keyArr[0], keyArr[1] as string),
  //     );

  //     res.send(data);
  //   } catch (e) {
  //     res.status(401).json({
  //       data: 'Authorization error',
  //     });
  //   }
};

export default loginApi;
