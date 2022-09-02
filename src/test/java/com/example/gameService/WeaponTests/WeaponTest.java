package com.example.gameService.WeaponTests;

import com.example.gameService.Models.Weapons.Weapon;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class WeaponTest {

    Weapon weapon;

    @BeforeEach
    public void before() {
        weapon = new Weapon("Battle Axe", 30);
    }

    @Test
    public void canGetWeaponName() {
        assertEquals("Battle Axe", weapon.getName());
    }

    @Test
    public void canGetWeaponDamage() {
        assertEquals(30, weapon.getDamage());
    }
}
