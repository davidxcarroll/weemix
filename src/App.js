import React, { useState, useEffect } from 'react';
import { generateLyrics } from './utils/lyricGenerators';
import { songTemplates } from './data/tunes';
import './App.css';

const WeemixApp = () => {
  const [topic, setTopic] = useState('food');
  const [tune, setTune] = useState('tuneFrere');
  const [currentLyrics, setCurrentLyrics] = useState([]);
  const [accentColor, setAccentColor] = useState('green');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topics = [
    { name: '🍕 Food', value: 'food' },
    { name: '🐶 Animals', value: 'animals' },
    { name: '⚽️ Sports', value: 'sports' },
    { name: '🌌 Star Wars', value: 'starwars' },
    { name: '👾 Minecraft', value: 'minecraft' },
    { name: '🍄 Mario', value: 'mario' },
    { name: '☁️ Pixar', value: 'pixar' },
    { name: '🧙‍♂️ Harry Potter', value: 'harry' },
    { name: '📄 The Office', value: 'office' },
    { name: '👹 Anything', value: 'anything' },
  ];

  const tunes = [
    { name: '💤 Frère Jacques', value: 'tuneFrere' },
    { name: '✨ Twinkle Twinkle', value: 'tuneTwinkle' },
    { name: '🛶 Row Boat', value: 'tuneRow' },
    { name: '🐑 Mary Lamb', value: 'tuneMary' },
    { name: '🥐 Hot Cross', value: 'tuneBuns' },
  ];

  const colors = [
    { name: '💚', value: 'green' },
    { name: '💙', value: 'blue' },
    { name: '💜', value: 'purple' },
    { name: '🩷', value: 'fuchsia' },
    { name: '❤️', value: 'red' },
    { name: '🧡', value: 'orange' },
    { name: '💛', value: 'yellow' },
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
        flex self-stretch items-center justify-center cursor-pointer whitespace-nowrap rounded-full
        md:py-3 sm:py-2 py-1
        md:px-6 sm:px-5 px-4
        ${currentValue === item.value
          ? 'bg-white ' + (
            accentColor === 'blue' ? 'text-blue-500' :
              accentColor === 'red' ? 'text-red-500' :
                accentColor === 'green' ? 'text-green-500' :
                  accentColor === 'purple' ? 'text-purple-500' :
                    accentColor === 'fuchsia' ? 'text-fuchsia-500' :
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
        flex-row flex-wrap justify-center gap-1
        absolute top-0 left-0 z-50
        backdrop-blur-sm overflow-auto
        xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg
        transition-[background] duration-1000 ease-in-out
        ${accentColor === 'blue' ? 'bg-blue-500/90' :
          accentColor === 'red' ? 'bg-red-500/90' :
            accentColor === 'green' ? 'bg-green-500/90' :
              accentColor === 'purple' ? 'bg-purple-500/90' :
                accentColor === 'fuchsia' ? 'bg-fuchsia-500/90' :
                  accentColor === 'orange' ? 'bg-orange-500/90' :
                    accentColor === 'yellow' ? 'bg-yellow-500/90' :
                      'bg-blue-500/90'
        }`}
      >

        {colors.map(c => renderButton(c, accentColor, setAccentColor, 'color'))}

        <div className="w-full flex justify-center items-center">Sing about</div>

        {topics.map(t => renderButton(t, topic, setTopic, 'topic'))}

        <div className="w-full flex justify-center items-center">to the tune of</div>

        {tunes.map(t => renderButton(t, tune, setTune, 'tune'))}

        {/* Sing button */}
        <div
          onClick={handleSing}
          className="w-full flex items-center justify-center text-white sm:text-6xl text-2xl  bg-black xl:py-8 md:py-6 py-4 md:rounded-t-[4rem] rounded-t-[2rem] whitespace-nowrap cursor-pointer"
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
            w-full flex items-center justify-center sm:gap-8 gap-1 rounded-full cursor-pointer
            md:pr-10 pr-3 md:pl-8 pl-4
            xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg
            xl:py-6 md:py-4 py-2
            ${accentColor === 'blue' ? 'bg-blue-500' :
              accentColor === 'red' ? 'bg-red-500' :
                accentColor === 'green' ? 'bg-green-500' :
                  accentColor === 'purple' ? 'bg-purple-500' :
                    accentColor === 'fuchsia' ? 'bg-fuchsia-500' :
                      accentColor === 'orange' ? 'bg-orange-500' :
                        accentColor === 'yellow' ? 'bg-yellow-500' :
                          'bg-blue-500'
            }
            `}
        >
          <span className="material-symbols-rounded md:!text-3xl !text-2xl">tune</span>
          <span className="w-full whitespace-break-spaces md:leading-6 leading-5 text-center">
            Sing about {topics.find(t => t.value === topic)?.name} to {tunes.find(t => t.value === tune)?.name}
          </span>
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
                    accentColor === 'fuchsia' ? 'bg-fuchsia-500' :
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
        xl:text-6xl lg:text-5xl md:text-4xl text-3xl
        xl:leading-[3rem] lg:leading-10 md:leading-9 leading-7
        ${accentColor === 'blue' ? 'text-blue-500' :
          accentColor === 'red' ? 'text-red-500' :
            accentColor === 'green' ? 'text-green-500' :
              accentColor === 'purple' ? 'text-purple-500' :
                accentColor === 'fuchsia' ? 'text-fuchsia-500' :
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