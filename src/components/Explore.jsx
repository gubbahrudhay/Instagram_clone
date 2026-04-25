import React from 'react';
import { Play, Copy } from 'lucide-react'; 

const Explore = () => {

  const explorePosts = [
    { id: 1, type: 'image', url: 'https://picsum.photos/seed/explore1/800/800', isCarousel: true },
    { id: 2, type: 'video', url: 'https://picsum.photos/seed/explore2/800/800' },
    { id: 3, type: 'image', url: 'https://picsum.photos/seed/explore3/800/800' },
    { id: 4, type: 'image', url: 'https://picsum.photos/seed/explore4/800/800' },
    { id: 5, type: 'video', url: 'https://picsum.photos/seed/explore5/800/800' },
    { id: 6, type: 'image', url: 'https://picsum.photos/seed/explore6/800/800', isCarousel: true },
    { id: 7, type: 'image', url: 'https://picsum.photos/seed/explore7/800/800' },
    { id: 8, type: 'image', url: 'https://picsum.photos/seed/explore8/800/800' },
    { id: 9, type: 'video', url: 'https://picsum.photos/seed/explore9/800/800' },
    { id: 10, type: 'image', url: 'https://picsum.photos/seed/explore10/800/800' },
    { id: 11, type: 'image', url: 'https://picsum.photos/seed/explore11/800/800', isCarousel: true },
    { id: 12, type: 'video', url: 'https://picsum.photos/seed/explore12/800/800' },
    { id: 13, type: 'image', url: 'https://picsum.photos/seed/explore13/800/800' },
    { id: 14, type: 'image', url: 'https://picsum.photos/seed/explore14/800/800' },
    { id: 15, type: 'image', url: 'https://picsum.photos/seed/explore15/800/800' },
  ];

  return (
    <div className="flex justify-center w-full min-h-screen bg-black">

      <div className="w-full max-w-[935px] pt-6 pb-20 px-4 md:px-0">
        

        <div className="grid grid-cols-3 gap-1">
          {explorePosts.map((post) => (
            <div 
              key={post.id} 
              className="relative aspect-square group cursor-pointer bg-[#262626]"
            >
              <img 
                src={post.url} 
                alt="Explore post" 
                className="w-full h-full object-cover"
              />
              

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                <div className="flex items-center text-white font-bold text-sm md:text-base">
                  <HeartIcon className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 fill-white" />
                  <span>{Math.floor(Math.random() * 1000)}</span>
                </div>
                <div className="flex items-center text-white font-bold text-sm md:text-base">
                  <MessageIcon className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 fill-white" />
                  <span>{Math.floor(Math.random() * 100)}</span>
                </div>
              </div>


              <div className="absolute top-2 right-2 text-white drop-shadow-md">
                {post.type === 'video' && <Play className="w-5 h-5 md:w-6 md:h-6 fill-white" />}
                {post.isCarousel && <Copy className="w-5 h-5 md:w-6 md:h-6" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const HeartIcon = ({ className }) => (
  <svg aria-label="Like" className={className} fill="currentColor" role="img" viewBox="0 0 24 24">
    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.16 6.16 0 0 0-4.896 2.45A6.16 6.16 0 0 0 7.004 1.904 6.989 6.989 0 0 0 .5 9.122c0 4.14 3.75 6.84 6.4 9.176 2.37 2.08 4.35 3.96 4.74 4.31a1.002 1.002 0 0 0 1.25 0c.39-.35 2.37-2.23 4.74-4.31 2.65-2.336 6.4-5.036 6.4-9.176a6.989 6.989 0 0 0-7.238-7.218Z"></path>
  </svg>
);

const MessageIcon = ({ className }) => (
  <svg aria-label="Comment" className={className} fill="currentColor" role="img" viewBox="0 0 24 24">
    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
  </svg>
);

export default Explore;
