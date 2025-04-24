import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function TaskList({ onChangeTask, onDeleteTask, tasks }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <ul className="space-y-3">
        {tasks.map(task => (
          <li key={task.id} className="bg-white p-4 rounded-lg shadow">
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <div className="flex items-center space-x-2">
        <Input
          value={task.text}
          className="flex-1"
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)} className="bg-blue-500 hover:bg-blue-600 text-white">
          Save
        </Button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">{task.text}</span>
        <Button onClick={() => setIsEditing(true)} className="bg-green-500 hover:bg-green-600 text-white">
          Edit
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center space-x-4">
        <Input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
        <div className="flex items-center space-x-4">
          {taskContent}
          <Button onClick={() => onDelete(task.id)} className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </div>
      </label>
    </div>
  );
}