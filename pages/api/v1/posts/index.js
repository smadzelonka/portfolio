import { data } from "@/data";
function handlePost(req, res) {
  res.status(200).json(data);
}
export default handlePost;
