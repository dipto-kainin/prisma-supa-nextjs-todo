'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../../prisma/client'; // Import the centralized Prisma client

export default async function deleteTodo(formData) {
  try {
    // Check if formData is valid
    if (!formData) {
      throw new Error('FormData is null or undefined.');
    }

    // Extract the 'id' from formData and parse it to an integer
    const id = parseInt(formData.get('id'), 10);
    console.log('ID:', id);
    if (isNaN(id)) {
      throw new Error('Invalid ID. ID must be a number.');
    }

    // Delete the todo from the database
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    console.log(`Todo with ID ${id} deleted.`);
    revalidatePath('/'); // Revalidate the cache for the home page
  } catch (error) {
    console.error('Error in deleteTodo:', error.message);
  }
}
