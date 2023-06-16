// SECTION GLOBAL VARIABLES
const heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100
  },
  {
    name: 'Flint Ironstag',
    type: 'elf',
    damage: 10,
    health: 50
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  loot: 100
}
let money = 0
totalDamage = 0

function buyPot() {
  heroes[0].health = 50
  heroes[1].health = 50
  drawFlintHP()
  drawSlateHP()

}

function makeLoot() {
  let gold = document.getElementById('loot')
  if (boss.health >= 0) {

    money += boss.loot
    gold.innerText = money
  }
}

// SECTION DRAW HP
function drawBossHP() {
  let bossHP = document.getElementById('bossHP')
  bossHP.innerText = boss.health
  bossLevel()
}


function drawSlateHP() {
  let slateHP = document.getElementById('slateHP')
  slateHP.innerText = slate.health

  gameOver()
}


function drawFlintHP() {
  let flintHP = document.getElementById('flintHP')
  flintHP.innerText = flint.health
  gameOver()
}
// SECTION DAMAGE
function bossCounter() {
  slate = heroes.find(hero => hero.name == 'Slate Slabrock')
  flint = heroes.find(hero => hero.name == 'Flint Ironstag')
  flint.health = flint.health - boss.damage
  slate.health = slate.health - boss.damage
  console.log(slate.health, flint.health);

  drawFlintHP()
  drawSlateHP()
}


function attackBoss() {

  // heroDamage = heroes.forEach( hero=> hero.name )

  // Add both heroes damage together
  slate = heroes.find(hero => hero.name == 'Slate Slabrock')
  flint = heroes.find(hero => hero.name == 'Flint Ironstag')
  totalDamage = slate.damage + flint.damage


  console.log(totalDamage)
  drawBossHP()
  drawFlintHP()
  drawSlateHP()
  // bossCounter()

  return totalDamage

}

// subtract damage from boss hp
function damageBoss() {
  boss.health -= totalDamage
  if (boss.health <= 0) {
    boss.health = 0
  }
  attackBoss()
  console.log(boss)
}

// SECTION 
function gameOver() {

  heroes.every(hero => {
    if (hero.health <= 0) {
      alert('game over')
    }


  })

  // if (hero.health < 0) {
  //   hero.health = false
  //   alert('Game Over')
  // }
}

function bossLevel() {
  if (boss.health <= 0) {
    boss.damage *= 2
    boss.maxHealth *= 2
    boss.health = boss.maxHealth
    boss.level *= 2
    boss.loot *= 2
    makeLoot()
  }
}

damageBoss();

setInterval(bossCounter, 5000)

