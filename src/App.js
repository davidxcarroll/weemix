import React, { useState, useEffect } from 'react';
import { generateLyrics } from './utils/lyricGenerators';
import { songTemplates } from './data/tunes';
import './App.css';

const WeemixApp = () => {
  const [topic, setTopic] = useState('animals');
  const [tune, setTune] = useState('tuneBuns');
  const [currentLyrics, setCurrentLyrics] = useState([]);
  const [accentColor, setAccentColor] = useState('blue');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topics = [
    { name: '🐶 Animals', value: 'animals' },
    { name: '⚽️ Sports', value: 'sports' },
    { name: '🍕 Food', value: 'food' },
    { name: '🌌 Star Wars', value: 'starwars' },
    { name: '👾 Minecraft', value: 'minecraft' },
    { name: '🍄 Mario', value: 'mario' },
    { name: '☁️ Pixar', value: 'pixar' },
    { name: '🧙‍♂️ Harry Potter', value: 'harry' },
    { name: '📄 The Office', value: 'office' },
    { name: '👹 Anything', value: 'anything' }
  ];

  const tunes = [
    { name: '💤 Frère Jacques', value: 'tuneFrere' },
    { name: '✨ Twinkle Twinkle', value: 'tuneTwinkle' },
    { name: '🛶 Row Boat', value: 'tuneRow' },
    { name: '🐑 Mary Lamb', value: 'tuneMary' },
    { name: '🥐 Hot Buns', value: 'tuneBuns' }
  ];

  const colors = [
    { name: '💙', value: 'blue' },
    { name: '💜', value: 'purple' },
    { name: '🩷', value: 'fuchsia' },
    { name: '❤️', value: 'red' },
    { name: '🧡', value: 'orange' },
    { name: '💛', value: 'yellow' },
    { name: '💚', value: 'green' }
  ];

  useEffect(() => {
    mix();
  }, []);

  const mix = () => {
    const newLyrics = generateLyrics(tune, topic);
    setCurrentLyrics(newLyrics);
  };

  const handleSing = () => {
    setIsModalOpen(false);
    mix();
  };

  const renderButton = (item, currentValue, setter, category) => (
    <div
      key={`${category}-${item.value}`}
      onClick={() => setter(item.value)}
      className={`
        cursor-pointer whitespace-nowrap rounded-full md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-2
        ${currentValue === item.value
          ? 'bg-white ' + (
            accentColor === 'blue' ? 'text-blue-500' :
              accentColor === 'red' ? 'text-red-500' :
                accentColor === 'green' ? 'text-green-500' :
                  accentColor === 'purple' ? 'text-purple-500' :
                    accentColor === 'pink' ? 'text-fuchsia-500' :
                      accentColor === 'orange' ? 'text-orange-500' :
                        accentColor === 'yellow' ? 'text-yellow-500' :
                          'text-blue-500'
          )
          : 'text-white bg-white/20'
        }
      `}
    >
      {item.name}
    </div>
  );

  return (
    <div className="relative flex flex-col-reverse w-screen h-[100dvh] min-h-[-webkit-fill-available] bg-white dark:bg-black font-pangram uppercase overflow-y-auto">

      {/* Modal */}
      <div className={`
        w-full h-full
        ${isModalOpen ? 'flex' : 'hidden'}
        flex-row flex-wrap items-end justify-center
        absolute top-0 left-0 z-50
        backdrop-blur-sm overflow-auto
        lg:text-3xl md:text-2xl sm:text-xl text-lg
        transition-[background] duration-1000 ease-in-out
        ${accentColor === 'blue' ? 'bg-blue-500/90' :
          accentColor === 'red' ? 'bg-red-500/90' :
            accentColor === 'green' ? 'bg-green-500/90' :
              accentColor === 'purple' ? 'bg-purple-500/90' :
                accentColor === 'pink' ? 'bg-fuchsia-500/90' :
                  accentColor === 'orange' ? 'bg-orange-500/90' :
                    accentColor === 'yellow' ? 'bg-yellow-500/90' :
                      'bg-blue-500/90'
        }`}
      >

        {/* Colors */}
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
          {/* <div className={`
    w-fit h-fit bg-white md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3 rounded-full whitespace-nowrap
    `}
  >
    🎨
  </div> */}
          {colors.map(c => renderButton(c, accentColor, setAccentColor, 'color'))}
        </div>

        Sing about

        {/* Topics */}
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
          {/* <div className={`
              w-fit h-fit bg-white md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3 rounded-full whitespace-nowrap
              `}
            >
              🌐
            </div> */}
          {topics.map(t => renderButton(t, topic, setTopic, 'topic'))}
        </div>

        to the tune of

        {/* Tunes */}
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
          {/* <div className={`
              w-fit h-fit bg-white md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3 rounded-full whitespace-nowrap
              `}
            >
              🎵
            </div> */}
          {tunes.map(t => renderButton(t, tune, setTune, 'tune'))}
        </div>

        {/* Sing button */}
        <div
          onClick={handleSing}
          className="w-full flex items-center justify-center text-white bg-black xl:py-6 md:py-4 py-2 rounded-t-full whitespace-nowrap cursor-pointer"
        >
          Sing!
        </div>

      </div>

      {/* Header */}
      <div className={`
        flex flex-row justify-center items-center w-full
        text-white dark:text-black max-md:px-0
        `}
      >

        <div
          onClick={() => setIsModalOpen(true)}
          className={`
            w-full flex items-center justify-center sm:gap-3 gap-2 rounded-full cursor-pointer
            md:pl-10 pl-5 md:pr-8 pr-4
            lg:text-3xl md:text-2xl sm:text-xl text-lg
            xl:py-6 md:py-4 py-2
            ${accentColor === 'blue' ? 'bg-blue-500' :
              accentColor === 'red' ? 'bg-red-500' :
                accentColor === 'green' ? 'bg-green-500' :
                  accentColor === 'purple' ? 'bg-purple-500' :
                    accentColor === 'pink' ? 'bg-fuchsia-500' :
                      accentColor === 'orange' ? 'bg-orange-500' :
                        accentColor === 'yellow' ? 'bg-yellow-500' :
                          'bg-blue-500'
            }
            `}
        >
          <span className="whitespace-break-spaces md:leading-6 leading-5 text-center">
            Sing about {topics.find(t => t.value === topic)?.name} to {tunes.find(t => t.value === tune)?.name}
          </span>
          <span className="material-symbols-rounded md:!text-3xl !text-2xl">tune</span>
        </div>

        {/* Mix button */}
        <div
          onClick={mix}
          className={`
            h-full max-h-20 aspect-square flex items-center justify-center rounded-full px-2 py-1 cursor-pointer
            ${accentColor === 'blue' ? 'bg-blue-500' :
              accentColor === 'red' ? 'bg-red-500' :
                accentColor === 'green' ? 'bg-green-500' :
                  accentColor === 'purple' ? 'bg-purple-500' :
                    accentColor === 'pink' ? 'bg-fuchsia-500' :
                      accentColor === 'orange' ? 'bg-orange-500' :
                        accentColor === 'yellow' ? 'bg-yellow-500' :
                          'bg-blue-500'
            }
            `}
        >
          <span className="material-symbols-rounded md:!text-3xl !text-2xl">autorenew</span>
        </div>

      </div>

      {/* Lyrics */}
      <div className={`
        lyrics flex flex-1 flex-col justify-evenly w-full md:p-8 p-2 overflow-y-auto
        xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl
        xl:leading-12 lg:leading-10 md:leading-8 sm:leading-6 leading-5
        ${accentColor === 'blue' ? 'text-blue-500' :
          accentColor === 'red' ? 'text-red-500' :
            accentColor === 'green' ? 'text-green-500' :
              accentColor === 'purple' ? 'text-purple-500' :
                accentColor === 'pink' ? 'text-fuchsia-500' :
                  accentColor === 'orange' ? 'text-orange-500' :
                    accentColor === 'yellow' ? 'text-yellow-500' :
                      'text-blue-500'
        }`}
      >
        {currentLyrics.map((line, index) => (
          <p key={`lyric-${index}`} className="w-full text-center">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default WeemixApp;