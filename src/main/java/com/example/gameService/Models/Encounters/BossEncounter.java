package com.example.gameService.Models.Encounters;


import com.example.gameService.Models.Characters.Enemy;

import javax.persistence.*;

@Entity
@Table(name = "bosses")
public class BossEncounter {

    @Id
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "enemy_id", nullable = false)
    private Enemy enemy;

    public BossEncounter(String name, Enemy enemy) {
        this.name = name;
        this.enemy = enemy;
    }

    private BossEncounter() {}

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

    public Enemy getEnemy() {
        return enemy;
    }

    public void setEnemy(Enemy enemy) {
        this.enemy = enemy;
    }
}
