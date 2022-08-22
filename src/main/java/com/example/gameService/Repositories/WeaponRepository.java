package com.example.gameService.Repositories;

import com.example.gameService.Models.Weapons.Weapon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeaponRepository extends JpaRepository<Weapon, Long> {
}
