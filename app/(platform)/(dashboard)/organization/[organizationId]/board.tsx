import { deleteBoard } from "@/actions/deleteBoard";
import BoardDeleteButton from "./BoardDeleteButton";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ id, title }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p className="w-72">Board title: {title}</p>
      <BoardDeleteButton />
    </form>
  );
};

export default Board;
