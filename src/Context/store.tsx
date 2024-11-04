'use client';
import React, { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, ReactNode } from 'react';
import { Game2 } from '../functions/players';
import { CSPlayer, LolPlayer, PlayerType, RainbowPlayer, ValorantPlayer, WNBAPlayer } from './PlayerTypes';
import {apiUrl} from '../data/data';

interface ContextProps {
  // ePlayers: PlayerType[];
  // setEPlayers:  Dispatch<SetStateAction<PlayerType[]>>;
  // fetchEPlayers: () => Promise<PlayerType[]>;
  wnbaPlayers: WNBAPlayer[];
  setWnbaPlayers: Dispatch<SetStateAction<WNBAPlayer[]>>;
  fetchWnbaPlayer: () => Promise<WNBAPlayer[]>;
  games: Game2[],
  setGames: Dispatch<SetStateAction<Game2[]>>;
  valorantPlayers: ValorantPlayer[];
  setValorantPlayers:  Dispatch<SetStateAction<ValorantPlayer[]>>;
  fetchValorantPlayers: () => Promise<ValorantPlayer[]>;
  lolPlayers: LolPlayer[],
  setLolPlayers: Dispatch<SetStateAction<LolPlayer[]>>,
  fetchLolPlayers: () => Promise<LolPlayer[]>,
  csPlayers: CSPlayer[],
  setCSPlayers: Dispatch<SetStateAction<CSPlayer[]>>,
  fetchCSPlayers: () => Promise<CSPlayer[]>,
  rainbowPlayers: RainbowPlayer[],
  setRainbowPlayers: Dispatch<SetStateAction<RainbowPlayer[]>>,
  fetchRainbowPlayers: () => Promise<RainbowPlayer[]>,
  comboPopUp: boolean,
  setComboPopUp: Dispatch<SetStateAction<boolean>>,
  playersInCombo: PlayerType[],
  setPlayersInCombo: Dispatch<SetStateAction<PlayerType[]>>,
}

const GlobalContext = createContext<ContextProps>({
  // ePlayers: [],
  // setWnbaPlayers: (): WNBAPlayer[] => [],
  // fetchWnbaPlayer: async (): Promise<WNBAPlayer[]> => [],

  wnbaPlayers: [],
  setWnbaPlayers: (): WNBAPlayer[] => [],
  fetchWnbaPlayer: async (): Promise<WNBAPlayer[]> => [],
  games: [],
  setGames: (): Game2[] => [],
  valorantPlayers: [],
  setValorantPlayers:  (): ValorantPlayer[] => [],
  fetchValorantPlayers: async (): Promise<ValorantPlayer[]> => [],
  lolPlayers: [],
  setLolPlayers:  (): LolPlayer[] => [],
  fetchLolPlayers: async (): Promise<LolPlayer[]> => [] ,
  csPlayers: [],
  setCSPlayers: (): CSPlayer[] => [],
  fetchCSPlayers: async (): Promise<CSPlayer[]> => [] ,
  rainbowPlayers: [],
  setRainbowPlayers: (): CSPlayer[] => [],
  fetchRainbowPlayers: async (): Promise<CSPlayer[]> => [] ,
  comboPopUp: false,
  setComboPopUp: (): boolean => false,
  playersInCombo: [],
  setPlayersInCombo: (): PlayerType[] => [],
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [wnbaPlayers, setWnbaPlayers] = useState<WNBAPlayer[]>([]);
  const [valorantPlayers, setValorantPlayers] = useState<ValorantPlayer[]>([]);
  const [lolPlayers, setLolPlayers] = useState<LolPlayer[]>([]);
  const [csPlayers, setCSPlayers] = useState<CSPlayer[]>([]);
  const [rainbowPlayers, setRainbowPlayers] = useState<RainbowPlayer[]>([]);
  const [games, setGames] = useState<Game2[]>([]);
  const [comboPopUp, setComboPopUp] = useState<boolean>(false);
  const [playersInCombo, setPlayersInCombo] = useState<PlayerType[]>([]);

  const fetchWnbaPlayer = async (): Promise<WNBAPlayer[]> => {
    if(wnbaPlayers.length > 0){
      console.log("Cached wnbaPlayers");
      return wnbaPlayers;
    } else {
      try {
        console.log("Not Cached wnbaPlayers");
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/wnba/players`);
        if (!response.ok) throw new Error('Failed to fetch wnbaPlayers players');

        const data = await response.json();
        setWnbaPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching wnbaPlayers players:', error);
        return [];
      }
    }
  };
  const fetchValorantPlayers = async (): Promise<ValorantPlayer[]> => {
    if(valorantPlayers.length > 0){
      return valorantPlayers;
    } else {
      try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/dummy/players`);
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/players`);
        if (!response.ok) throw new Error('Failed to fetch Valorant players');
        const data = await response.json();
        setValorantPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching Valorant players:', error);
        return [];
      }
    }
  };
  const fetchLolPlayers = async (): Promise<LolPlayer[]> => {
    if(lolPlayers.length > 0){
      console.log("Cached Lol");
      return lolPlayers;
    } else {
      try {
        console.log("Not Cached Lol");
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/lol/allPlayers`);
        if (!response.ok) throw new Error('Failed to fetch Lol players');

        const data = await response.json();
        setLolPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching Lol players:', error);
        return [];
      }
    }
  };
  const fetchCSPlayers = async (): Promise<CSPlayer[]> => {
    if(csPlayers.length > 0){
      return csPlayers;
    } else {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/cs/players`);
        if (!response.ok) throw new Error('Failed to fetch CS players');

        const data = await response.json();
        setCSPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching Lol players:', error);
        return [];
      }
    }
  };
  const fetchRainbowPlayers = async (): Promise<CSPlayer[]> => {
    if(rainbowPlayers.length > 0){
      return rainbowPlayers;
    } else {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/rainbow/players`);
        if (!response.ok) throw new Error('Failed to fetch R6 players');
        const data = await response.json();
        console.log(data)
        setRainbowPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching Lol players:', error);
        return [];
      }
    }
  };

  return (
    <GlobalContext.Provider value={{ 
      wnbaPlayers, setWnbaPlayers, fetchWnbaPlayer,
      valorantPlayers, setValorantPlayers, fetchValorantPlayers,
      lolPlayers, setLolPlayers, fetchLolPlayers,
      csPlayers, setCSPlayers, fetchCSPlayers,
      rainbowPlayers, setRainbowPlayers, fetchRainbowPlayers,
      games, setGames, 
      comboPopUp, setComboPopUp,
      playersInCombo, setPlayersInCombo
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
