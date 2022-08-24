package com.example.gameService.Components;

import com.example.gameService.Models.Characters.Enemy;
import com.example.gameService.Models.Characters.Player;
import com.example.gameService.Models.Encounters.BattleEncounter;
import com.example.gameService.Models.Encounters.BossEncounter;
import com.example.gameService.Models.Encounters.LootEncounter;
import com.example.gameService.Models.Weapons.Weapon;
import com.example.gameService.Repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BattleEncounterRepository battleEncounterRepository;

    @Autowired
    BossEncounterRepository bossEncounterRepository;

    @Autowired
    EnemyRepository enemyRepository;

    @Autowired
    LootEncounterRepository lootEncounterRepository;

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    WeaponRepository weaponRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Weapon longSword = new Weapon("Long Sword", 25);
        weaponRepository.save(longSword);

        Weapon shortSword = new Weapon("Short Sword", 18);
        weaponRepository.save(shortSword);

        Weapon battleAxe = new Weapon("Battle Axe", 30);
        weaponRepository.save(battleAxe);

        Weapon handAxe = new Weapon("Hand Axe", 14);
        weaponRepository.save(handAxe);

        Weapon wakizashi = new Weapon("Wakizashi", 28);
        weaponRepository.save(wakizashi);

        Weapon kodachi = new Weapon("Kodachi", 18);
        weaponRepository.save(kodachi);

        Enemy Ogre = new Enemy("Og the Ogre", 100, 50, 1, shortSword);
        enemyRepository.save(Ogre);

        Enemy Troll = new Enemy("Tom the Troll", 100, 50, 1, shortSword);
        enemyRepository.save(Troll);

        Enemy Bat = new Enemy("Bob the Bat", 100, 50, 1, shortSword);
        enemyRepository.save(Bat);

        Enemy Slug = new Enemy("Sam the Slug", 100, 50, 1, shortSword);
        enemyRepository.save(Slug);

        Player kevin = new Player("Kevin", 100, "Warrior", 0,1, shortSword);
        playerRepository.save(kevin);

        Player gimli = new Player("Gimli", 120, "Dwarven Axemaster", 0, 1, battleAxe);
        playerRepository.save(gimli);

        BattleEncounter battle1 = new BattleEncounter("First battle", Slug);
        battleEncounterRepository.save(battle1);

        LootEncounter loot1 = new LootEncounter("First swag", kodachi);
        lootEncounterRepository.save(loot1);

        BossEncounter boss1 = new BossEncounter("First boss", Bat);
        bossEncounterRepository.save(boss1);
    }
}
