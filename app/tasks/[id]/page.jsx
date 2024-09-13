import EditForm from '@/app/components/EditForm';
import { getCurrentState } from '@/utils/actions';
import Link from 'next/link';

const SingleTasks = async ({ params }) => {
  const { id } = params;
  const data = await getCurrentState(id);

  return (
    <div className='flex flex-col gap-8 items-start '>
      <Link href={'/tasks'} className='btn btn-primary'>
        Back Home
      </Link>
      <EditForm task={data} />
    </div>
  );
};

export default SingleTasks;
