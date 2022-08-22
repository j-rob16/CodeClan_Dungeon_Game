package com.example.gameService.Repositories;

import com.example.gameService.Models.Encounters.BattleEncounter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BattleEncounterRepository extends JpaRepository<BattleEncounter, Long> {
}
