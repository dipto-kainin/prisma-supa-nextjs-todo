'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../../prisma/client'; // Import the centralized Prisma client

export default async function addTodo(formData) {
  try {
    // Check if formData is valid
    if (!formData) {
      throw new Error('FormData is null or undefined.');
    }

    // Extract the 'title' from formData
    const title = formData.get('title');
    if (!title) {
      throw new Error('Title is required.');
    }

    // Create a new todo in the database
    await prisma.todo.create({
      data: {
        title,
      },
    });
    console.log(`Todo added: ${title}`);
    revalidatePath('/'); // Revalidate the cache for the home page
  } catch (error) {
    console.error('Error in addTodo:', error.message);
  }
}
