import { EGame, PlayerType, ValorantGame } from "../../../Context/PlayerTypes";

export class Valorant {
    static allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2"];
    static statsHeader = [
        {name: "K", underName: "Kills"},
        {name: "D", underName: "Deaths"},
        {name: "A", underName: "Assists"},
        {name: "FK", underName: "First Kills"},
        {name: "FD", underName: "First Deaths"},
    ];

    static compareFunction = (pickedBtn:string, newAllGames: ValorantGame[], name: string): number[][] => {
        const addUpMaps = (pickedNumbers: number[], game: ValorantGame) => {
            let statsArr: number[] = Array(this.statsHeader.length).fill(0);

            /* Scenrio in which we pick map 3 but there was no played map 3 */
            if(pickedNumbers.length === 1 && pickedNumbers[0] === 2 && !game.maps[2].didPlay){
                return Array(this.statsHeader.length).fill(-1);
            } 
            
            for(let number of pickedNumbers){
                let map = game.maps[number];
                
                if(map.didPlay){
                    let playerStats = map.players.find(p => p.name === name)
                    if(playerStats){
                        statsArr[0] += Number(playerStats!.kills)
                        statsArr[1] += Number(playerStats!.deaths)
                        statsArr[2] += Number(playerStats!.assists)
                        statsArr[3] += Number(playerStats!.firstKills)
                        statsArr[4] += Number(playerStats!.firstDeaths)
                    } else {
                        return [-1];
                    }
                } 
            }

            return statsArr;
        }

        let displayStats: number[][] = [];
        if(pickedBtn === 'All Maps') {
            displayStats = newAllGames.map((game) => addUpMaps([0,1,2], game))
        } 
        else if(pickedBtn === 'Map 1'){
            displayStats = newAllGames.map((game) => addUpMaps([0], game))
        }
        else if(pickedBtn === 'Map 2'){
            displayStats = newAllGames.map((game) => addUpMaps([1], game))
        }
        else if(pickedBtn === 'Map 3'){
            displayStats = newAllGames.map((game) => addUpMaps([2], game))
        }
        else if (pickedBtn === 'Map 1+2') {
            displayStats = newAllGames.map((game) => addUpMaps([0,1], game));
        }

        // console.log(displayStats)
        return displayStats;
    }


    static fetchMatches = async (foundPlayer: PlayerType): Promise<ValorantGame[]> => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/games`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({team: foundPlayer?.team}) 
        });
        const allGames = await res.json();
        const sortedGames = allGames.sort((a: { date: string }, b: { date: string }) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        return sortedGames;
    }  
}