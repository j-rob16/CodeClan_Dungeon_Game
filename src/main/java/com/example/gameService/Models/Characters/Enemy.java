package com.example.gameService.Models.Characters;

import com.example.gameService.Models.Weapons.Weapon;

import javax.persistence.*;

@Entity
@Table(name = "enemies")
public class Enemy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private int maxHealth;

    @Column
    private int exp;

    @Column
    private String type;

    @Column
    private int level;

    @ManyToOne
    @JoinColumn(name = "weapon_id")
    private Weapon weapon;

    public Enemy(String name, int maxHealth, int exp, int level, String type, Weapon weapon) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.exp = exp;
        this.level = level;
        this.type = type;
        this.weapon = weapon;
    }

    private Enemy() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxHealth() {
        return maxHealth;
    }

    public void setMaxHealth(int maxHealth) {
        this.maxHealth = maxHealth;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getType() { return type; }

    public void  setType(String type) {this.type = type;}

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }
}
