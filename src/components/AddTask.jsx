import React from 'react';
import Layout from './Layout';
import axios from 'axios';

function AddTask() {
    const [formData, setFormData] = React.useState({
        task: '',
        completed: false,
        time: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/tasks/addTask', formData);
            console.log('Task added:', response.data);
            // Reset form after submission
            setFormData({
                task: '',
                completed: false,
                time: ''
            });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <Layout>
            <div className='h-auto overflow-hidden p-8 text-center'>
                <h1 className='text-4xl font-bold mt-6'>Add Task</h1>
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4 items-center justify-center mt-8'>
                    <input 
                        type='text' 
                        placeholder='Task' 
                        className='border-2 p-5 w-2/5 bg-transparent rounded-3xl' 
                        value={formData.task} 
                        required
                        onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                    />
                    <input 
                        type='date' 
                        placeholder='Due Date' 
                        className='border-2 p-5 w-2/5 bg-transparent rounded-3xl mb-5' 
                        value={formData.time} 
                        required
                        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    />
                    <button 
                        type='submit'
                        className='bg-blue-500 text-white p-5 w-1/5 rounded-3xl shadow-md shadow-gray-600 hover:bg-gray-800 transition-all
                        duration-300 ease-in-out hover:border-blue-600 border hover:text-gray-200 text-xl'
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default AddTask;
