import React, { useState, useEffect } from 'react';
import { generateLyrics } from './utils/lyricGenerators';
import { songTemplates } from './data/tunes';
import './App.css';

const WeemixApp = () => {
  const [topic, setTopic] = useState('topicAnimals');
  const [tune, setTune] = useState('tuneFrere');
  const [currentLyrics, setCurrentLyrics] = useState([]);
  const [accentColor, setAccentColor] = useState('blue');

  const colorOptions = [
    { name: '💙 Blue', value: 'blue' },
    { name: '💜 Purple', value: 'purple' },
    { name: '🩷 Pink', value: 'pink' },
    { name: '❤️ Red', value: 'red' },
    { name: '🧡 Orange', value: 'orange' },
    { name: '💛 Yellow', value: 'yellow' },
    { name: '💚 Green', value: 'green' },
  ];

  useEffect(() => {
    mix();
  }, [topic, tune]);

  const getDisplayName = (value) => {
    if (value.startsWith('topic')) {
      return value.replace('topic', '');
    }
    if (value.startsWith('tune')) {
      const song = Object.values(songTemplates).find(s => s.id === value);
      return song ? song.name : value.replace('tune', '');
    }
    return value;
  };

  const mix = () => {
    const themeKey = topic.replace('topic', '').toLowerCase();
    const newLyrics = generateLyrics(tune, themeKey);
    setCurrentLyrics(newLyrics);
  };

  return (
    <div className="flex md:flex-col flex-col-reverse w-screen h-[100dvh] min-h-[-webkit-fill-available] bg-white dark:bg-black font-pangram uppercase overflow-y-auto">

      <div className={`flex flex-row flex-wrap md:gap-2 gap-1 justify-center items-center w-full md:p-4 p-2 text-white dark:text-black md:text-2xl text-base max-md:px-0 overflow-y-auto ${accentColor === 'blue' ? 'bg-blue-500' :
        accentColor === 'red' ? 'bg-red-500' :
          accentColor === 'green' ? 'bg-green-500' :
            accentColor === 'purple' ? 'bg-purple-500' :
              accentColor === 'pink' ? 'bg-pink-500' :
                accentColor === 'orange' ? 'bg-orange-500' :
                  accentColor === 'teal' ? 'bg-teal-500' :
                    accentColor === 'yellow' ? 'bg-yellow-500' :
                      'bg-blue-500' // default fallback
        }`}>

        {/* <label className="md:leading-6 leading-5 text-center">Sing about</label> */}

        <div className="relative">
          <div className="flex items-center justify-center rounded-3xl border-2 border-white dark:border-black pl-4 pr-2 py-1 cursor-pointer">
            <span className="md:leading-6 leading-5 text-center line-clamp-1">{getDisplayName(topic)}</span>
            <span className="material-symbols-rounded md:!text-3xl !text-xl">keyboard_arrow_down</span>
          </div>
          <select
            className="absolute inset-0 opacity-0 cursor-pointer w-full"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="topicAnimals">🐶 Animals</option>
            <option value="topicSports">⚽️ Sports</option>
            <option value="topicFood">🍔 Food</option>
            <option value="topicOffice">📄 The Office</option>
            <option value="topicStarWars">🪐 Star Wars</option>
            <option value="topicMinecraft">👾 Minecraft</option>
            <option value="topicMario">🍄 Mario</option>
            <option value="topicPixar">☁️ Pixar</option>
            <option value="topicHarry">✨ Harry Potter</option>
            <option value="topicAnything">👹 Anything</option>
            {/* <option value="topicChristmas">🎄 Christmas</option> */}
          </select>
        </div>

        {/* <label className="md:leading-6 leading-5 text-center">to the tune of</label> */}

        <div className="relative">
          <div className="flex items-center justify-center rounded-3xl border-2 border-white dark:border-black pl-4 pr-2 py-1 cursor-pointer">
            <span className="md:leading-6 leading-5 text-center line-clamp-1">{getDisplayName(tune)}</span>
            <span className="material-symbols-rounded md:!text-3xl !text-xl">keyboard_arrow_down</span>
          </div>
          <select
            className="absolute inset-0 opacity-0 cursor-pointer w-full"
            value={tune}
            onChange={(e) => setTune(e.target.value)}
          >
            <option value="tuneFrere">💤 Frère Jacques</option>
            <option value="tuneTwinkle">✨ Twinkle Twinkle Little Star</option>
            <option value="tuneRow">🛶 Row Row Row Your Boat</option>
            <option value="tuneMary">🐑 Mary Had a Little Lamb</option>
            <option value="tuneBuns">🥐 Hot Cross Buns</option>
            {/* <option value="tuneJingle">☃️ Jingle Bells</option> */}
          </select>
        </div>

        <div className="flex flex-row flex-wrap md:gap-2 gap-1 justify-center items-center">

          <div className="relative">
            <div className="md:w-12 w-10 md:h-12 h-10 flex items-center justify-center rounded-3xl border-2 border-white dark:border-black px-2 py-1 cursor-pointer">
              <span className="material-symbols-rounded md:!text-3xl !text-xl">invert_colors</span>
            </div>
            <select
              className="absolute inset-0 opacity-0 cursor-pointer w-full"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
            >
              {colorOptions.map(color => (
                <option key={color.value} value={color.value}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>

          <div className="md:w-12 w-10 md:h-12 h-10 flex items-center justify-center rounded-3xl border-2 border-white dark:border-black px-2 py-1 cursor-pointer" onClick={mix}>
            <span className="material-symbols-rounded md:!text-3xl !text-xl">autorenew</span>
          </div>

        </div>

      </div>

      <div className={`
  lyrics flex flex-1 flex-col justify-evenly w-full md:p-8 p-2 overflow-y-auto
  xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl
  ${accentColor === 'blue' ? 'text-blue-500' :
          accentColor === 'red' ? 'text-red-500' :
            accentColor === 'green' ? 'text-green-500' :
              accentColor === 'purple' ? 'text-purple-500' :
                accentColor === 'pink' ? 'text-pink-500' :
                  accentColor === 'orange' ? 'text-orange-500' :
                    accentColor === 'teal' ? 'text-teal-500' :
                      accentColor === 'yellow' ? 'text-yellow-500' :
                        'text-blue-500' // default fallback
        }
`}>
        {currentLyrics.map((line, index) => (
          <p key={index} className="w-full text-center">{line}</p>
        ))}
      </div>

    </div>
  );
};

export default WeemixApp;