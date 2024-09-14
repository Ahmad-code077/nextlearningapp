'use server';

import { z } from 'zod';
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
export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get('content');
  const Tasks = z.object({
    content: z.string().min(5).max(30),
  });
  try {
    Tasks.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath('/tasks');
    return { message: 'success!!!' };
  } catch (error) {
    // console.log(error.errors[0]?.message);
    return { message: error.errors[0]?.message };
  }
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
