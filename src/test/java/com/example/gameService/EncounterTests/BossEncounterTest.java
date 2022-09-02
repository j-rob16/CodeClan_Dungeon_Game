package com.example.gameService.EncounterTests;

import com.example.gameService.Models.Characters.Enemy;
import com.example.gameService.Models.Encounters.BossEncounter;
import com.example.gameService.Models.Weapons.Weapon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BossEncounterTest {

    BossEncounter bossEncounter;
    Enemy boss;
    Weapon axe;

    @BeforeEach
    public void before() {
        axe = new Weapon("Axe", 30);
        boss = new Enemy("Boss", 200, 100, 3, axe);
        bossEncounter = new BossEncounter("Big Boss Fight", boss);
    }

    @Test
    public void canGetFightName() {
        assertEquals("Big Boss Fight", bossEncounter.getName());
    }

    @Test
    public void canGetBossMan() {
        assertEquals(boss, bossEncounter.getEnemy());
    }
}
