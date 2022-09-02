package com.example.gameService.CharacterTests;

import com.example.gameService.Models.Characters.Enemy;
import com.example.gameService.Models.Weapons.Weapon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class EnemyTest {

    Enemy enemy;

    Weapon weapon1;

    @BeforeEach
    public void before() {
        weapon1 = new Weapon("Club", 10);
        enemy = new Enemy("Ogre", 100, 50, 1, weapon1);
    }

    @Test
    public void canGetEnemyName(){
        assertEquals("Ogre", enemy.getName());
    }

    @Test
    public void canGetEnemyMaxHealth(){
        assertEquals(100, enemy.getMaxHealth());
    }

    @Test
    public void canGetEnemyExp() {
        assertEquals(50, enemy.getExp());
    }

    @Test
    public void canGetEnemyLevel() {
        assertEquals(1, enemy.getLevel());
    }

    @Test
    public void canGetEnemyWeapon() {
        assertEquals(weapon1, enemy.getWeapon());
    }
}
