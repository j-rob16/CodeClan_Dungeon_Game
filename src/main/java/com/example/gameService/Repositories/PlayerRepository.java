package com.example.gameService.Repositories;

import com.example.gameService.Models.Characters.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
