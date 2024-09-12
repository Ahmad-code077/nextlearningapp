import prisma from '@/utils/db';

const prismaHandler = async () => {
  await prisma.task.create({
    data: {
      content: 'wake up aleemrk',
    },
  });
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTask;
};
const PrismaExample = async () => {
  const tasks = await prismaHandler();
  return (
    <div>
      <h1>Prisma Handler</h1>
      {tasks.map((task) => {
        return <div key={task.id}>{task.content}</div>;
      })}
    </div>
  );
};
export default PrismaExample;
