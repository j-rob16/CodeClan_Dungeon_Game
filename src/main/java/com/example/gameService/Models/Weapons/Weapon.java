package com.example.gameService.Models.Weapons;

import javax.persistence.*;

@Entity
@Table(name = "weapons")
public class Weapon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "damage")
    private int damage;

    public Weapon(String name, int damage) {
        this.name = name;
        this.damage = damage;
    }
    public Weapon() {};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDamage() {
        return damage;
    }

    public void setDamage(int damage) {
        this.damage = damage;
    }
}