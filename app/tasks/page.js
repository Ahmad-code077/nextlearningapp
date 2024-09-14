import TaskForm from '../components/TaskForm';
import TaskFormCustom from '../components/TaskFormCustom';
import TaskList from '../components/TaskList';

const Tasks = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};
export default Tasks;
