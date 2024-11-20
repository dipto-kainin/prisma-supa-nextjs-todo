import addTodo from './action/addTodo';
import deleteTodo from './action/deleteTodo';
import prisma from '@/prisma/client';
export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Todo list</h1>
      <form action={addTodo} className="mb-4">
        <input
          className="shadow appearance-none border rounded py-2 px-3 mr-2 text-black placeholder:text-gray-500"
          type="text"
          name="title"
          placeholder="add new todo title"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-4 shadow my-2"
          >
            <span className="text-lg text-black">{todo.title}</span>
            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
