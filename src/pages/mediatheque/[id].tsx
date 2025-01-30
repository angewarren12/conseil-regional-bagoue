import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { mediaFolders, MediaItem } from '../../data/mediatheque';
import { Dialog } from '@headlessui/react';
import YouTube from 'react-youtube';
import Link from 'next/link';

export default function MediathequeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const folder = mediaFolders.find(f => f.id === id);

  if (!folder) {
    return <div>Dossier non trouvé</div>;
  }

  const handleMediaClick = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  return (
    <>
      <Head>
        <title>{folder.title} - Médiathèque - Conseil Régional de la Bagoué</title>
      </Head>

      <Navbar />

      {/* En-tête avec navigation */}
      <section className="w-full bg-gradient-to-r from-[#4CAF50] via-[#9DC726] to-[#F7E859] pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-white mb-6">
            <Link href="/mediatheque" className="flex items-center hover:opacity-80">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à la médiathèque
            </Link>
          </div>
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{folder.title}</h1>
            <p className="text-xl opacity-90">{folder.description}</p>
          </div>
        </div>
      </section>

      {/* Grille des médias */}
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {folder.items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleMediaClick(item)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.date}</p>
                  <p className="text-gray-700 line-clamp-3">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal pour l'affichage des médias */}
      <Dialog
        open={selectedMedia !== null}
        onClose={() => setSelectedMedia(null)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />

          <div className="relative bg-white rounded-xl max-w-5xl w-full mx-auto">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              {selectedMedia && (
                <>
                  {selectedMedia.type === 'image' ? (
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  ) : (
                    selectedMedia.youtubeId ? (
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <YouTube
                          videoId={selectedMedia.youtubeId}
                          opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                              autoplay: 1,
                            },
                          }}
                        />
                      </div>
                    ) : (
                      <video
                        src={selectedMedia.url}
                        controls
                        autoPlay
                        className="w-full max-h-[70vh] rounded-lg"
                      />
                    )
                  )}
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-2">{selectedMedia.title}</h3>
                    <p className="text-gray-500 mb-4">{selectedMedia.date}</p>
                    <p className="text-gray-700 whitespace-pre-line">{selectedMedia.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
