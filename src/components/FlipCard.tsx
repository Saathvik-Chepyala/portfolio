'use client';

import styles from './FlipCard.module.css';
import { Github, Youtube } from 'lucide-react';

interface FlipCardProps {
  title: string;
  description: string;
  skills: string[];
  githubUrl?: string;
  youtubeUrl?: string;
  className?: string;
}

export default function FlipCard({ title, description, skills, githubUrl, youtubeUrl, className = '' }: FlipCardProps) {
  return (
    <div className={`relative h-[300px] ${styles.flipCardContainer} ${className}`}>
      <div className={`${styles.flipCardInner}`}>
        {/* Front of card */}
        <div className={`bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center h-full ${styles.flipCardFront}`}>
          <h3 className="text-3xl font-extrabold mb-6 text-center">{title}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Back of card */}
        <div className={`bg-gray-700 rounded-lg p-8 flex flex-col items-center justify-center ${styles.flipCardBack}`}>
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
            {description}
          </p>
          {(githubUrl || youtubeUrl) && (
            <div className="flex gap-4 justify-center mt-2">
              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow transition-colors"
                >
                  <Youtube size={20} /> Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-900 text-white font-semibold shadow transition-colors"
                >
                  <Github size={20} /> Repo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 