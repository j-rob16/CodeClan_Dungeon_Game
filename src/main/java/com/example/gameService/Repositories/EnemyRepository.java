package com.example.gameService.Repositories;

import com.example.gameService.Models.Characters.Enemy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnemyRepository extends JpaRepository<Enemy, Long> {
}
