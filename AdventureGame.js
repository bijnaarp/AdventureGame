<<<<<<< HEAD
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
=======
// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let inventory = [];

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Will increase to 10 when player gets a sword
console.log("Starting weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
let monsterDefense = 5;    // Monster's defense value
console.log("Monster defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;  // How much health is restored
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

// Location trackiing
let currentLocation = "village";  // Starting location
let firstTimePlayer = true;  // Track if it's the player's first time in the village
console.log("Starting location: " + currentLocation);
console.log("First time playing: " + firstTimePlayer);
>>>>>>> 0720c70 (more game updates)
