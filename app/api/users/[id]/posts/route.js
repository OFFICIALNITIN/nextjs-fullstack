import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  console.log(params);
  try {
    await ConnectToDB();
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
