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
    { name: '👹 Anything', value: 'anything' }
  ];

  const tunes = [
    { name: '💤 Frère Jacques', value: 'tuneFrere' },
    { name: '✨ Twinkle Twinkle', value: 'tuneTwinkle' },
    { name: '🛶 Row Row Row', value: 'tuneRow' },
    { name: '🐑 Mary Little Lamb', value: 'tuneMary' },
    { name: '🥐 Hot Cross Buns', value: 'tuneBuns' }
  ];

  const colors = [
    { name: '💙 Blue', value: 'blue' },
    { name: '💜 Purple', value: 'purple' },
    { name: '🩷 Pink', value: 'pink' },
    { name: '❤️ Red', value: 'red' },
    { name: '🧡 Orange', value: 'orange' },
    { name: '💛 Yellow', value: 'yellow' },
    { name: '💚 Green', value: 'green' }
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
      onClick={() => setter(item.value)}
      className={`
        cursor-pointer whitespace-nowrap rounded-full md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3
        ${currentValue === item.value 
          ? 'bg-white ' + (
              accentColor === 'blue' ? 'text-blue-500' :
              accentColor === 'red' ? 'text-red-500' :
              accentColor === 'green' ? 'text-green-500' :
              accentColor === 'purple' ? 'text-purple-500' :
              accentColor === 'pink' ? 'text-pink-500' :
              accentColor === 'orange' ? 'text-orange-500' :
              accentColor === 'yellow' ? 'text-yellow-500' :
              'text-blue-500'
            )
          : 'text-white/80 sm:shadow-[inset_0_0_0_4px_rgba(255,255,255,.25)] shadow-[inset_0_0_0_3px_rgba(255,255,255,.25)]'
        }
      `}
    >
      {item.name}
    </div>
  );

  return (
    <div className="relative flex md:flex-col flex-col-reverse w-screen h-[100dvh] min-h-[-webkit-fill-available] bg-white dark:bg-black font-pangram uppercase overflow-y-auto">
      {/* Modal */}
      <div className={`
        w-full h-screen
        ${isModalOpen ? 'flex' : 'hidden'}
        flex-row flex-wrap items-center justify-center gap-1
        absolute top-0 left-0 z-50 md:p-2
        backdrop-blur-sm overflow-auto
        lg:text-3xl md:text-2xl sm:text-xl text-lg
        ${accentColor === 'blue' ? 'bg-blue-500/90' :
          accentColor === 'red' ? 'bg-red-500/90' :
          accentColor === 'green' ? 'bg-green-500/90' :
          accentColor === 'purple' ? 'bg-purple-500/90' :
          accentColor === 'pink' ? 'bg-pink-500/90' :
          accentColor === 'orange' ? 'bg-orange-500/90' :
          accentColor === 'yellow' ? 'bg-yellow-500/90' :
          'bg-blue-500/90'
        }`}
      >

          {/* Topics */}
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
            <div className={`
              w-fit h-fit bg-white md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3 rounded-full whitespace-nowrap
              `}
            >
              Topics
            </div>
            {topics.map(t => renderButton(t, topic, setTopic, 'topic'))}
          </div>

          {/* Tunes */}
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
            <div className={`
              w-fit h-fit bg-white md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3 rounded-full whitespace-nowrap
              `}
            >
              Tunes
            </div>
            {tunes.map(t => renderButton(t, tune, setTune, 'tune'))}
          </div>

          {/* Colors */}
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-1">
            <div className={`
              w-fit h-fit bg-white md:py-3 sm:py-2 py-1 md:px-6 sm:px-4 px-3 rounded-full whitespace-nowrap
              `}
            >
              Color
            </div>
            {colors.map(c => renderButton(c, accentColor, setAccentColor, 'color'))}
          </div>

          {/* Sing button */}
          <div 
            onClick={handleSing}
            className="w-full flex items-center justify-center text-white bg-black xl:py-6 md:py-4 py-2 rounded-full whitespace-nowrap cursor-pointer"
          >
            Sing!
          </div>

      </div>

      {/* Header */}
      <div className={`
        flex flex-row flex-wrap md:gap-2 gap-1 justify-center items-center w-full md:p-4 p-2 
        text-white dark:text-black md:text-2xl text-base max-md:px-0 overflow-y-auto
        ${accentColor === 'blue' ? 'bg-blue-500' :
          accentColor === 'red' ? 'bg-red-500' :
          accentColor === 'green' ? 'bg-green-500' :
          accentColor === 'purple' ? 'bg-purple-500' :
          accentColor === 'pink' ? 'bg-pink-500' :
          accentColor === 'orange' ? 'bg-orange-500' :
          accentColor === 'yellow' ? 'bg-yellow-500' :
          'bg-blue-500'
        }`}
      >
        {/* Config button */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 rounded-3xl border-2 border-white dark:border-black pl-5 pr-3 py-1 cursor-pointer"
        >
          <span className="md:leading-6 leading-5 text-center">
            Sing about {topics.find(t => t.value === topic)?.name} to {tunes.find(t => t.value === tune)?.name}
          </span>
          <span className="material-symbols-rounded md:!text-3xl !text-xl">tune</span>
        </div>

        {/* Mix button */}
        <div 
          onClick={mix}
          className="md:w-12 w-10 md:h-12 h-10 flex items-center justify-center rounded-3xl border-2 border-white dark:border-black px-2 py-1 cursor-pointer"
        >
          <span className="material-symbols-rounded md:!text-3xl !text-xl">autorenew</span>
        </div>
      </div>

      {/* Lyrics */}
      <div className={`
        lyrics flex flex-1 flex-col justify-evenly w-full md:p-8 p-2 overflow-y-auto
        xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl
        ${accentColor === 'blue' ? 'text-blue-500' :
          accentColor === 'red' ? 'text-red-500' :
          accentColor === 'green' ? 'text-green-500' :
          accentColor === 'purple' ? 'text-purple-500' :
          accentColor === 'pink' ? 'text-pink-500' :
          accentColor === 'orange' ? 'text-orange-500' :
          accentColor === 'yellow' ? 'text-yellow-500' :
          'text-blue-500'
        }`}
      >
        {currentLyrics.map((line, index) => (
          <p key={index} className="w-full text-center">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default WeemixApp;