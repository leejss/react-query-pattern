import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const result = await prismaClient.word.create({
        data: req.body,
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json("something went wrong");
    }
  }

  if (req.method === "GET") {
    const result = await prismaClient.word.findMany();
    return res.status(200).json(result);
  }
}
