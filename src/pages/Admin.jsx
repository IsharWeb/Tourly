import { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Article Submitted:", formData);
    alert("Saved (just in console for now)");
    setFormData({ title: "", description: "", content: "", image: "", category: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Write New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "description", "image", "category"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
            required
          />
        ))}
        <textarea
          name="content"
          rows="8"
          value={formData.content}
          onChange={handleChange}
          placeholder="Full blog content..."
          className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save Article
        </button>
      </form>
    </div>
  );
};

export default Admin;