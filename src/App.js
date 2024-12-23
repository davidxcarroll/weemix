import React, { useState } from 'react';
import { generateLyrics } from './utils/lyricGenerators';
import { songTemplates } from './data/songData';
import './App.css';

const WeemixApp = () => {
  const [topic, setTopic] = useState('topicRandom');
  const [tune, setTune] = useState('tuneFrere');
  const [currentLyrics, setCurrentLyrics] = useState([]);

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
    // Convert topic from 'topicAnimals' to just 'animals'
    const themeKey = topic.replace('topic', '').toLowerCase();
    // If random is selected, pick a random theme
    const theme = themeKey === 'random' 
      ? ['animals', 'starwars', 'food'][Math.floor(Math.random() * 3)]
      : themeKey;
    
    const newLyrics = generateLyrics(tune, theme);
    setCurrentLyrics(newLyrics);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse w-screen h-screen bg-amber-50 pangram-sans-rounded-extrabold uppercase overflow-y-auto">

      <div className="flex flex-col md:gap-4 gap-1 md:w-1/3 w-full md:p-4 p-2 text-amber-50 md:text-2xl text-xl bg-red-500 md:h-full overflow-y-auto">
        
        <label className="md:leading-6 leading-5 text-center">a song about</label>

        <div className="relative flex-1 min-h-16">
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl border-2 border-amber-50 md:p-4 p-1 cursor-pointer">
            <span className="md:leading-6 leading-5 text-center">{getDisplayName(topic)}</span>
            <span className="material-symbols-rounded text-4xl">keyboard_arrow_down</span>
          </div>
          <select 
            className="absolute inset-0 opacity-0 cursor-pointer w-full"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="topicRandom">Random</option>
            <option value="topicAnimals">Animals</option>
            <option value="topicStarWars">Star Wars</option>
            <option value="topicFood">Food</option>
          </select>
        </div>

        <label className="md:leading-6 leading-5 text-center">to the tune of</label>
        
        <div className="relative flex-1 min-h-16">
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl border-2 border-amber-50 md:p-4 p-1 cursor-pointer">
            <span className="md:leading-6 leading-5 text-center">{getDisplayName(tune)}</span>
            <span className="material-symbols-rounded text-4xl">keyboard_arrow_down</span>
          </div>
          <select 
            className="absolute inset-0 opacity-0 cursor-pointer w-full"
            value={tune}
            onChange={(e) => setTune(e.target.value)}
          >
            <option value="tuneFrere">Frère Jacques</option>
            <option value="tuneRow">Row Row Row Your Boat</option>
            <option value="tuneMary">Mary Had a Little Lamb</option>
          </select>
        </div>

        <div className="relative flex-1 min-h-16">
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl border-2 border-amber-50 max-md:mt-4 md:p-4 p-1 cursor-pointer" onClick={mix}>
            <h1 className="text-center">Weemix</h1>
            <span className="material-symbols-rounded text-4xl">autorenew</span>
          </div>
        </div>

      </div>

      <div className="lyrics flex flex-1 flex-col justify-evenly md:w-2/3 w-full md:p-8 p-2 md:text-4xl text-2xl text-red-500 overflow-y-auto">
        {currentLyrics.map((line, index) => (
          <p key={index} className="w-full text-center leading-relaxed">{line}</p>
        ))}
      </div>

    </div>
  );
};

export default WeemixApp;