import { db } from "@/lib/db";
import Board from "./board";
import Form from "./form";

const OrganizationPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="flex items-start gap-y-2 flex-col">
        {boards.map(({ id, title }) => (
          <Board key={id} id={id} title={title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationPage;
