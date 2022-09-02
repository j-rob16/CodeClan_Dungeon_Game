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

        Weapon deathStick = new Weapon("The stick of Death", 100);
        weaponRepository.save(deathStick);

        Weapon soulStealer = new Weapon("The Burning Blade", 40);
        weaponRepository.save(soulStealer);

        Enemy Ent = new Enemy("Neck Beard", 100, 50, 1, "Ent", shortSword);
        enemyRepository.save(Ent);

        Enemy Warrior = new Enemy("Montezuma", 100, 50, 1,"Aztec", shortSword);
        enemyRepository.save(Warrior);

        Enemy DaemonKnight = new Enemy("Mr. Crowley", 100, 50, 1, "DaemonKnight", shortSword);
        enemyRepository.save(DaemonKnight);

        Enemy Minotaur = new Enemy("Gary the Minotaur", 100, 50, 1, "Minotaur", shortSword);
        enemyRepository.save(Minotaur);

        Enemy Boss = new Enemy("Mitch, Master of Malevolence", 150, 150, 2, "Boss", battleAxe);
        enemyRepository.save(Boss);

        Player kevin = new Player("Kevin", 100, "Knight of The Wobbly Table", 0, 1, "Warrior", shortSword);
        playerRepository.save(kevin);

        Player gimli = new Player("Gimli", 120, "Dwarven Axemaster", 0, 1, "Dwarf", battleAxe);
        playerRepository.save(gimli);

        Player admin = new Player("Arnesto", 120, "Admin Extraodinaire", 1000, 100, "Admin", deathStick);
        playerRepository.save(admin);

        Player elf = new Player("Nimrodel", 100, "Warmaiden of The Forest", 0, 1, "Elf", wakizashi);
        playerRepository.save(elf);

        BattleEncounter battle1 = new BattleEncounter("First battle", Ent);
        battleEncounterRepository.save(battle1);

        BattleEncounter battle2 = new BattleEncounter("Second Battle", Minotaur);
        battleEncounterRepository.save(battle2);

        BattleEncounter battle3 = new BattleEncounter("Third Battle", DaemonKnight);
        battleEncounterRepository.save(battle3);

        BattleEncounter battle4 = new BattleEncounter("Fourth Battle", Warrior);
        battleEncounterRepository.save(battle4);

        LootEncounter loot1 = new LootEncounter("First swag", kodachi);
        lootEncounterRepository.save(loot1);

        BossEncounter boss1 = new BossEncounter("First boss", Boss);
        bossEncounterRepository.save(boss1);
    }
}
