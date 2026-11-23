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
console.log("======================================");
console.log("         The Dragon's Quest        ");
console.log("======================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player name using readline-sync
let playerName = readlineSync.question("\nWhat is your name, brave adventurer? ");
console.log(`\nWelcome, ${playerName}! Your journey begins now.`);

// Inventory
let inventory = [];

// Game state variables
let health = 100; // Player's health points
let strength = 10; // Player's strength level
let agility = 8; // Player's agility level
let goldAmount = 100 // player's gold coins level
let gameRunning = true; // Game loop control variable
let currentLocation = "village"; // Starting location

// Display player stats
console.log("\nYou start with " + goldAmount + " gold coins."); 
