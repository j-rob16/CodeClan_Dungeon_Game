package com.example.gameService.Repositories;

import com.example.gameService.Models.Encounters.LootEncounter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LootEncounterRepository extends JpaRepository<LootEncounter, Long> {
}
