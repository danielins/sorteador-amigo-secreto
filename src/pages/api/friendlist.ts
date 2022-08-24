import { NextApiHandler } from "next";
import { initialState } from "../../store/friendListSlice";

const friendlistHandler: NextApiHandler = async (request, response) => {
  const { friendlist = initialState } = request.body

  await new Promise((resolve) => setTimeout(resolve, 500))

  response.json({ data: friendlist })
}

export default friendlistHandler