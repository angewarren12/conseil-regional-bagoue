import { useRouter } from 'next/router';
import Image from 'next/image';
import newsData from '../../data/news.json';
import Layout from '../../components/Layout';

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  const newsItem = newsData.news.find(item => item.id === id);

  if (!newsItem) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Actualité non trouvée</h1>
            <button
              onClick={() => router.push('/')}
              className="mt-4 px-6 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-[#4CAF50] mb-3">{newsItem.date}</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{newsItem.title}</h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">{newsItem.fullDescription}</p>
                </div>
                {newsItem.tags && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {newsItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-8">
                  <button
                    onClick={() => router.push('/')}
                    className="px-6 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors"
                  >
                    Retour à l'accueil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
