import React from "react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-slate-800">
        <img
          src={
            project.thumbnail.includes("http") ||
            project.thumbnail.includes(".")
              ? project.thumbnail
              : `https://picsum.photos/seed/${project.id}/600/400`
          }
          alt={project.title}
          className="w-full h-full scale-90 group-hover:scale-95 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold group-hover:text-figma-purple transition-colors duration-300">
            {project.title}
          </h4>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          {project.period}
        </p>
        <ul className="space-y-2 mb-6 lg:max-w-[70%]">
          {project.description.slice(0, 1).map((desc, i) => (
            <li
              key={i}
              className="text-sm line-clamp-2 text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              {desc}
            </li>
          ))}
        </ul>
        <div className="flex items-center text-slate-900 dark:text-white group-hover:text-figma-purple text-sm font-bold group-hover:translate-x-1 transition-all duration-300">
          View Project Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
