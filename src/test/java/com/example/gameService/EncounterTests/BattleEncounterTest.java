package com.example.gameService.EncounterTests;

import com.example.gameService.Models.Characters.Enemy;
import com.example.gameService.Models.Encounters.BattleEncounter;
import com.example.gameService.Models.Weapons.Weapon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BattleEncounterTest {

    BattleEncounter battleEncounter;
    Enemy enemy;
    Weapon weapon;

    @BeforeEach
    public void before() {
        weapon = new Weapon("Sword", 30);
        enemy = new Enemy("Orc", 120, 50, 1, weapon);
        battleEncounter = new BattleEncounter("Pirate Battle", enemy);
    }

    @Test
    public void canGetEncounterName() {
        assertEquals("Pirate Battle", battleEncounter.getName());
    }

    @Test
    public void canGetEncounterEnemy() {
        assertEquals(enemy, battleEncounter.getEnemy());
    }
}
