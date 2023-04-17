import { NextApiRequest, NextApiResponse } from 'next'

interface responseType {
  text: string;
}

export default (req: NextApiRequest, res: NextApiResponse<responseType>) => {
  res.status(200).json({ text: 'Hello' })
}