
import axios from 'axios';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
import AuthContext from '../context/AuthContext';

const CreateAssignment = () => {
    const { user } = useContext(AuthContext);
    
    const [formData, setFormData] = useState({
        title: '',
        email: user.email,
        description: '',
        marks: '',
        thumbnail: '',
        difficulty: 'easy',
        dueDate: new Date(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, dueDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://job-assessment-server.vercel.app/assignments', formData);
            toast.success('Assignment created successfully');
            console.log(response.data);
        } catch (error) {
            toast.error('Error creating assignment');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center">
            <div className="card w-full max-w-md bg-white shadow-md p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Create Assignment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="input input-bordered"
                            placeholder="Assignment Title"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered"
                            placeholder="Assignment Description"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Marks</label>
                        <input
                            type="number"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                            className="input input-bordered"
                            placeholder="Total Marks"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Thumbnail Image URL</label>
                        <input
                            type="url"
                            name="thumbnail"
                            value={formData.thumbnail}
                            onChange={handleChange}
                            className="input input-bordered"
                            placeholder="Image URL"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Difficulty Level</label>
                        <select
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            className="select select-bordered"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Due Date</label>
                        <DatePicker
                            selected={formData.dueDate}
                            onChange={handleDateChange}
                            className="input input-bordered w-full"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Create Assignment</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;
