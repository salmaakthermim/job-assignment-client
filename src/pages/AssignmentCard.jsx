import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const AssignmentCard = ({ currentUserEmail }) => {
  const { user } = useContext(AuthContext);
  const initialAssignments = useLoaderData(); 
  const [assignments, setAssignments] = useState(initialAssignments);
  const [editingAssignment, setEditingAssignment] = useState(null);

  // Fetch all assignments
  const fetchAllAssignments = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/assignments/${user?.email}`, {
          withCredentials: true

        })
      console.log(data)
      setAssignments(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch assignments.");
    }
  };

  // Handle delete assignment
  const handleDelete = async id => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/assignment/${id}`
        
      );
      console.log(data)
      toast.success("Assignment deleted successfully!");
      fetchAllAssignments(); 
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

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
        `http://localhost:5000/assignment/${editingAssignment._id}`,
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
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
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
              <div className="card-actions mt-4">
                <Link
                  to={`/assignments/${assignment._id}`}
                  className="btn btn-primary "
                >
                  View
                </Link>
                <button
                  className="btn btn-secondary "
                  onClick={() => handleUpdate(assignment)}
                >
                  Update
                </button>
                <button
                  className="btn btn-error "
                  onClick={() => handleDelete(assignment._id)}
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

