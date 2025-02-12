const FeatureSection = () => {
    const features = [
      {
        title: "📌 Create & Share Assignments",
        description:
          "Easily create assignments with a title, description, and deadline. Assignments are visible to all registered users (friends).",
      },
      {
        title: "📥 Submit Assignments",
        description:
          "Submit assignments with a Google Docs link and a quick note. All submissions are marked as 'Pending' until reviewed.",
      },
      {
        title: "📝 Review & Grade Assignments",
        description:
          "Friends can evaluate and grade each other's submissions. Provide marks and feedback to help improve learning.",
      },
      {
        title: "📊 Track Assignment Status",
        description:
          "View submitted assignments along with status, marks, and feedback. Keep track of pending and completed assignments.",
      },
      {
        title: "🔐 Secure & User-Friendly",
        description:
          "Only registered users can create, submit, and grade assignments. JWT authentication ensures a secure and private environment.",
      },
    ];
  
    return (
      <section className="py-12  dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold  dark:text-white">
            🚀 Key Features
          </h2>
          <p className=" mt-2">
            Enhance your learning experience with our online group study platform.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border dark:bg-gray-600 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold  dark:text-white">
                  {feature.title}
                </h3>
                <p className=" mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;
  