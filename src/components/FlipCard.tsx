'use client';

import styles from './FlipCard.module.css';

interface FlipCardProps {
  title: string;
  description: string;
  skills: string[];
  className?: string;
}

export default function FlipCard({ title, description, skills, className = '' }: FlipCardProps) {
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
        <div className={`bg-gray-700 rounded-lg p-8 flex items-center justify-center ${styles.flipCardBack}`}>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 