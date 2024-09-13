'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const allTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};
export const createTask = async (fromData) => {
  const name = fromData.get('content');

  await prisma.task.create({
    data: {
      content: name,
    },
  });
  revalidatePath('/tasks');
};

export const deleteTask = async (fromData) => {
  await prisma.task.delete({
    where: {
      id: fromData.get('id'),
    },
  });
  revalidatePath('/tasks');
};

export const updateTask = async (fromData) => {
  const id = fromData.get('id');
  const content = fromData.get('content');
  const completed = fromData.get('completed');

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  });
  redirect('/tasks');
};

export const getCurrentState = async (id) => {
  return prisma.task.findUnique({
    where: { id },
  });
};
