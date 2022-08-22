package com.example.gameService.Repositories;

import com.example.gameService.Models.Encounters.BossEncounter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BossEncounterRepository extends JpaRepository<BossEncounter, Long> {
}
