import { useRouter } from 'next/router';
import Image from 'next/image';

interface NewsCardProps {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
  tags?: string[];
}

const NewsCard = ({ id, image, date, title, description, tags }: NewsCardProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#4CAF50] mb-3">{date}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#4CAF50] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <button
          onClick={() => router.push(`/actualites/${id}`)}
          className="text-[#4CAF50] hover:text-[#45a049] font-medium flex items-center gap-2"
        >
          Voir plus
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-sm text-[#4CAF50]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
