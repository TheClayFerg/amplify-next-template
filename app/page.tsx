"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

    function listTodos() {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
    }

    useEffect(() => {
        listTodos();
    }, []);

    function deleteTodo(id: string) {
        client.models.Todo.delete({ id });
    }

    function createTodo() {
        client.models.Todo.create({
            content: window.prompt("Todo content"),
        });
    }

    return (
        <main className="pt-24 p-6">
            <h1 className="text-3xl font-bold mb-4">My Todos</h1>

            <button
                onClick={createTodo}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mb-4"
            >
                + New
            </button>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        onClick={() => deleteTodo(todo.id)}
                        key={todo.id}
                        className="cursor-pointer bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                        {todo.content}
                    </li>
                ))}
            </ul>
        </main>
    );
}
