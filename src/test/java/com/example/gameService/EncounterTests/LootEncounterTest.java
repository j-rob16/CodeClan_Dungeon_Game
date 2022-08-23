package com.example.gameService.EncounterTests;

import com.example.gameService.Models.Encounters.LootEncounter;
import com.example.gameService.Models.Weapons.Weapon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LootEncounterTest {
    LootEncounter lootEncounter;
    Weapon sword;

    @BeforeEach
    public void before() {
        sword = new Weapon("Sword", 30);
        lootEncounter = new LootEncounter("Sword Treasure", sword);
    }

    @Test
    public void canGetRoomName() {
        assertEquals("Sword Treasure", lootEncounter.getName());
    }

    @Test
    public void canGetLootItem() {
        assertEquals(sword, lootEncounter.getWeapon());
    }
}
