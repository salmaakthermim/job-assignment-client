import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const AssignmentCard = ({ currentUserEmail }) => {
  const { user } = useContext(AuthContext);
  const initialAssignments = useLoaderData(); 
  const [assignments, setAssignments] = useState(initialAssignments||[]);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [search, setSearch] = useState('');

  // Fetch all assignments
  const fetchAllAssignments = async () => {
    try {
      const { data }  = await axios.get(
        `https://job-assessment-server.vercel.app/assignments/${user?.email}`, {
          withCredentials: true

        })
      console.log(data)
      setAssignments(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch assignments.");
    }
  };

    // Fetch assignments with filters
    const fetchFilteredAssignments = async () => {
      try {
        const { data } = await axios.get(`https://job-assessment-server.vercel.app/assignments`, {
          params: {
            difficulty,
            search,
          },
          withCredentials: true,
        });
        setAssignments(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch assignments.");
      }
    };
  
    useEffect(() => {
      fetchFilteredAssignments();
    }, [difficulty, search]);

  // Handle delete assignment
  const handleDelete = async id => {
    try {
      const  data  = await axios.delete(
        `https://job-assessment-server.vercel.app/assignment/${id}`
        
      );
      console.log(data)
      toast.success("Assignment deleted successfully!");
      fetchFilteredAssignments()
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) =>{
    toast(
      (t) => (
        <div className="flex items-center gap-3">
          <div><p>Are you <b>sure?</b></p></div>
          <div>
            <button className="bg-red-400 text-white px-3 py-1 rounded-md" onClick={() => {
              toast.dismiss(t.id)
              handleDelete(id)
              
              }}>yes</button>
            <button className="bg-green-400 text-white px-3 py-1 rounded-md" onClick={() => toast.dismiss(t.id)}>Cancel</button>
          </div>
      
        </div>
      )
     
    );
  }

 

  // Handle update button
  const handleUpdate = (assignment) => {
    if (assignment.creatorEmail !== currentUserEmail) {
      toast.error("You can only update assignments you have created.");
      return;
    }
    setEditingAssignment(assignment);
  };

  // Handle submission of updated assignment
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        title: editingAssignment.title,
        marks: editingAssignment.marks,
        difficulty: editingAssignment.difficulty,
      };

      const { data } = await axios.put(
        `https://job-assessment-server.vercel.app/assignment/${editingAssignment._id}`,
        {
          currentUserEmail,
          updatedData,
        }
      );

      console.log(data);
      toast.success("Assignment updated successfully!");
      setEditingAssignment(null);
      fetchAllAssignments();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update the assignment.");
    }
};


  return (
    <div className="container mx-auto p-4">
         <div className="flex items-center gap-4 ">
        {/* Filter by Difficulty */}
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="select select-bordered"
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6">
        {Array.isArray(assignments) && assignments?.map((assignment) => (
          <div
            key={assignment._id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <figure>
              <img
                src={assignment.thumbnail}
                alt="Assignment Thumbnail"
                className="w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {assignment.title}
              </h2>
              <p className="text-sm text-gray-600">Marks: {assignment.marks}</p>
              <p className="text-sm text-gray-600">
                Difficulty: {assignment.difficulty}
              </p>
              <div className=" gap-5 mt-4 flex">
                <Link
                  to={`/assignments/${assignment._id}`}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-pink-600 hover:to-blue-600 transition duration-300" 
                >
                  View
                </Link>
                <button
                  className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold py-2 px-4 rounded shadow transition duration-300 hover:shadow-lg hover:scale-105 "
                  onClick={() => handleUpdate(assignment)}
                >
                  Update
                </button>
                <button
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded "
                  onClick={() => modernDelete(assignment._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {editingAssignment && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Assignment</h3>
            <form onSubmit={handleSubmitUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={editingAssignment.title}
                  onChange={(e) =>
                    setEditingAssignment({
                      ...editingAssignment,
                      title: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  value={editingAssignment.marks}
                  onChange={(e) =>
                    setEditingAssignment({
                      ...editingAssignment,
                      marks: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Difficulty</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={editingAssignment.difficulty}
                  onChange={(e) =>
                    setEditingAssignment({
                      ...editingAssignment,
                      difficulty: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditingAssignment(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentCard;

