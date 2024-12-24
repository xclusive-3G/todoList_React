import React, { useState } from "react";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const TodoList = () => {
    const [saveTodo, setSaveTodo] = useState([
        {
            id: 1,
            title: "sleeping tonight",
            description: "I want to be the best version of myself by sleeping well tonight.",
        },
    ]);
    const [expandedId, setExpandedId] = useState(null); // Tracks the expanded item
    const [newTitle, setNewTitle] = useState(""); // Tracks input for title
    const [newDescription, setNewDescription] = useState(""); // Tracks input for description
    const [editId, setEditId] = useState(null); // Tracks the todo being edited
    const [editTitle, setEditTitle] = useState(""); // Tracks edited title
    const [editDescription, setEditDescription] = useState(""); // Tracks edited description

    // Add a new todo
    const addTodo = () => {
        if (!newTitle.trim() || !newDescription.trim()) {
            alert("Both title and description are required!");
            return;
        }
        setSaveTodo([
            ...saveTodo,
            {
                id: Date.now(), // Unique identifier
                title: newTitle,
                description: newDescription,
            },
        ]);
        setNewTitle(""); // Clear input fields
        setNewDescription("");
    };

    // Delete a todo by ID
    const deleteTodo = (id) => {
        setSaveTodo((prevArray) => prevArray.filter((item) => item.id !== id));
    };

    // Toggle the expanded state for a specific item
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // Edit a todo
    const startEdit = (id, title, description) => {
        setEditId(id);
        setEditTitle(title);
        setEditDescription(description);
    };

    // Save the edited todo
    const saveEdit = () => {
        if (!editTitle.trim() || !editDescription.trim()) {
            alert("Both title and description are required!");
            return;
        }
        setSaveTodo((prevArray) =>
            prevArray.map((item) =>
                item.id === editId
                    ? { ...item, title: editTitle, description: editDescription }
                    : item
            )
        );
        setEditId(null);
        setEditTitle("");
        setEditDescription("");
    };

    return (
        <section className="w-full h-screen items-center">
            <div className="justify-center items-center shadow-md">
                {/* Header */}
                <div className="w-full h-20 bg-black flex justify-center items-center font-bold text-2xl fixed">
                    <h2 className="text-white">Todo List</h2>
                </div>

                {/* Input Section */}
                <div className="flex flex-col items-center pt-32 gap-4">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="bg-[rgba(0,0,0,0.1)] w-3/4 p-2"
                        placeholder="Enter a todo title..."
                    />
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="bg-[rgba(0,0,0,0.1)] w-3/4 p-2 h-24 resize-none"
                        placeholder="Enter a todo description..."
                    ></textarea>
                    <button
                        className="px-10 py-2 bg-black text-white font-bold text-xl"
                        onClick={addTodo}
                    >
                        Add Todo
                    </button>
                </div>

                {/* Todo List */}
                <div className="mt-14">
                    {saveTodo.map(({ id, title, description }) => (
                        <div
                            key={id}
                            className="shadow-md font-medium px-5 py-2 text-xl mt-4"
                        >
                            {editId === id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="bg-[rgba(0,0,0,0.1)] w-full p-2"
                                    />
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="bg-[rgba(0,0,0,0.1)] w-full p-2 h-20 resize-none mt-2"
                                    ></textarea>
                                    <div className="flex justify-end mt-2">
                                        <button
                                            className="px-4 py-2 bg-green-500 text-white mr-2"
                                            onClick={saveEdit}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white"
                                            onClick={() => setEditId(null)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p className="w-full break-words">{title}</p>
                                    </div>

                                    <div className="grid mt-2">
                                        <div className="flex justify-between m-1">
                                            <p></p>

                                            <p
                                                className="hover:transition hover:scale-105 duration-300 hover:rotate-180 cursor-pointer"
                                                onClick={() => toggleExpand(id)}
                                                aria-label="Expand description"
                                            >
                                                <IoIosArrowUp />
                                            </p>
                                        </div>

                                        {expandedId === id && (
                                            <motion.div
                                                className=""
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <span className="text-xl font-semibold">
                                                    Description:{" "}
                                                </span>
                                                <div className="w-3/4 break-words">
                                                    {description}
                                                </div>
                                                <div className="flex cursor-pointer justify-end">
                                                    <p
                                                        className="hover:scale-125 hover:duration-200 mr-1"
                                                        aria-label="Edit todo"
                                                        onClick={() =>
                                                            startEdit(id, title, description)
                                                        }
                                                    >
                                                        <MdOutlineModeEdit size={25} />
                                                    </p>
                                                    <p
                                                        className="hover:scale-125 hover:duration-200"
                                                        onClick={() => deleteTodo(id)}
                                                        aria-label="Delete todo"
                                                    >
                                                        <MdDeleteOutline size={25} />
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TodoList;
