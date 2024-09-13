import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { allTasks } from '@/utils/actions';

const TaskList = async () => {
  const Tasks = await allTasks();

  if (Tasks.length <= 0) {
    return <h1 className='text-xl'> NO task Found </h1>;
  }
  return (
    <ul className='mt-8'>
      {Tasks.map((task) => (
        <li
          key={task.id}
          className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
        >
          <h2
            className={`capitalize text-lg  ${
              task.completed ? 'line-through' : null
            } `}
          >
            {task.content}
          </h2>
          <div className='flex items-center gap-4'>
            <Link href={`/tasks/${task.id}`} className='btn  btn-accent btn-xs'>
              Edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
