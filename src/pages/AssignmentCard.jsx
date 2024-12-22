
import { useLoaderData } from 'react-router-dom';

const AssignmentCard = () => {
   
     const assignments = useLoaderData()
        
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {assignments.map((assignment, index) => (
          <div
            key={index}
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
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">View</button>
                <button className="btn btn-secondary btn-sm">Update</button>
                <button className="btn btn-error btn-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentCard;
