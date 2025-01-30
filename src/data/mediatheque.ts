export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  youtubeId?: string;
}

export interface MediaFolder {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  items: MediaItem[];
}

export const mediaFolders: MediaFolder[] = [
 
  {
    id: 'remise-infrastructures',
    title: 'Remise des infrastructures',
    description: 'Découvrez les infrastructures réalisées par le Conseil Régional de la Bagoué',
    coverImage: '/images/mediatheque/remise-infrastructures-cover.png',
    items: [
      {
        type: 'image',
        url: '/images/mediatheque/remise-infrastructures-cover.png',
        title: 'Cérémonie de remise des infrastructures',
        date: '2024-01-30',
        description: 'Remise officielle des infrastructures par le Président du Conseil Régional, M. Bruno Nabagné Kone'
      },
      {
        type: 'video',
        url: '/videos/mediatheque/remise-infrastructures.mp4',
        title: 'Reportage RTI1 - Remise des infrastructures',
        date: '2024-01-30',
        description: 'Suivez, à travers ce reportage de RTI1, la remise des infrastructures réalisées par le Conseil Régional de la Bagoué dans les localités de Sianhala, Mougnini, N\'Déou et Nibrini. #BagouéDéveloppement #Infrastructures #RTI1 #ActionRégionale',
        thumbnail: '/images/mediatheque/remise-infrastructures.png'
      }
    ]
  }
];
