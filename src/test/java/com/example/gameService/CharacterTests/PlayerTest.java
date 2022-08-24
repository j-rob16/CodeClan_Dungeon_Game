package com.example.gameService.CharacterTests;

import com.example.gameService.Models.Characters.Player;
import com.example.gameService.Models.Weapons.Weapon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PlayerTest {

    Player player;
    Weapon katana;

    @BeforeEach
    public void before() {
        katana = new Weapon("Katana", 30);
        player = new Player("Rod", 160, "Warrior", 0, 1, katana);
    }

    @Test
    public void canGetPlayerName() {
        assertEquals("Rod", player.getName());
    }

    @Test
    public void canGetPlayerHealth() {
        assertEquals(160, player.getMaxHealth());
    }

    @Test
    public void playerExperienceStartsAt0() {
        assertEquals(0, player.getExp());
    }

    @Test
    public void playerLevelStartsAt1() {
        assertEquals(1, player.getLevel());
    }

    @Test
    public void playerHasWeapon() {
        assertEquals(katana, player.getWeapon());
    }
}
