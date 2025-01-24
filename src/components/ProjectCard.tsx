import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetails {
  budget: string;
  duration: string;
  location: string;
  beneficiaries: string;
  objectives: string[];
}

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  status: string;
  progress: number;
  description: string;
  details: ProjectDetails;
}

const ProjectCard = ({ id, title, image, category, status, progress, description, details }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-green-100 text-green-800';
      case 'Planifié':
        return 'bg-blue-100 text-blue-800';
      case 'Terminé':
        return 'bg-gray-100 text-gray-800';
      case 'En pause':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-600">{progress}%</div>
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="text-gray-500">Budget:</span>
            <div className="font-medium text-gray-900">{details.budget}</div>
          </div>
          <div>
            <span className="text-gray-500">Durée:</span>
            <div className="font-medium text-gray-900">{details.duration}</div>
          </div>
          <div>
            <span className="text-gray-500">Localisation:</span>
            <div className="font-medium text-gray-900">{details.location}</div>
          </div>
          <div>
            <span className="text-gray-500">Bénéficiaires:</span>
            <div className="font-medium text-gray-900">{details.beneficiaries}</div>
          </div>
        </div>

        <Link 
          href={`/projets/${id}`}
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
        >
          Voir les détails
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
