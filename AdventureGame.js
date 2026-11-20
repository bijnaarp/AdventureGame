// Import readline-sync
const readlineSync = require('readline-sync');

/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync
let playerName = readlineSync.question("What is your name, adventurer? ");
console.log(`Welcome, ${playerName}! Your journey begins now.`);

// Inventory
let inventory = [];

// Player stats
let health = 100; // Player's health points
let strength = 10; // Player's strength level
let agility = 8; // Player's agility level
let goldAmount = 100 // player's gold coins level

// Display player stats
console.log(`Your starting stats are: 
Health: ${health}, Strength: ${strength}, Agility: ${agility}, Gold: ${goldAmount}`);