'use client';
import { deleteTask } from '../../utils/actions';

import { useFormStatus } from 'react-dom';

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className='btn btn-error btn-xs'>
      {pending ? 'pending.....' : 'Delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />{' '}
    </form>
  );
};
export default DeleteForm;
