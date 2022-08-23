package com.example.gameService.Models.Encounters;

import com.example.gameService.Models.Weapons.Weapon;

import javax.persistence.*;

@Entity
@Table(name = "loots")
public class LootEncounter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "weapon_id", nullable = false)
    private Weapon weapon;

    public LootEncounter(String name, Weapon weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    public LootEncounter() {}

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

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }
}
