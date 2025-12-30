import React from "react";
import { Project } from "../types";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-figma-purple mb-12 transition-colors font-bold group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Work
        </button>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column: Meta Info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h1 className="text-4xl font-extrabold mb-4">{project.title}</h1>
              <span className="px-3 py-1 bg-white/50 dark:bg-slate-800 rounded-full text-xs font-bold uppercase tracking-wider text-figma-purple border border-slate-200 dark:border-slate-700">
                {project.category}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  My Role
                </h4>
                <p className="text-lg font-bold">
                  {project.role || "Contributor"}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Duration
                </h4>
                <p className="text-lg font-bold">{project.period}</p>
              </div>
              {project.grade && (
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Achievement
                  </h4>
                  <p className="text-lg font-bold text-figma-green">
                    {project.grade}
                  </p>
                </div>
              )}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Key Activities
                </h4>
                <ul className="space-y-2">
                  {(project.activities || project.description).map((act, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-figma-purple"></div>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Process & Media */}
          <div className="lg:col-span-8 space-y-12">
            <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-white/40 dark:bg-slate-900 shadow-2xl border-4 border-white/60 dark:border-slate-800">
              {project.video ? (
                <video
                  src={project.video}
                  className="w-full h-full"
                  controls
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-extrabold mb-6">
                Project Process & Description
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl whitespace-pre-line">
                {project.process || project.description.join("\n\n")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
