package com.example.gameService.Controllers;

import com.example.gameService.Models.Encounters.BattleEncounter;
import com.example.gameService.Repositories.BattleEncounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BattleEncounterController {

    @Autowired
    BattleEncounterRepository battleEncounterRepository;

    @GetMapping(value = "/battleEncounters")
    public ResponseEntity<List<BattleEncounter>> getAllBattleEncounters() {
        return new ResponseEntity<>(battleEncounterRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/battleEncounters/{id}")
    public ResponseEntity<Optional<BattleEncounter>> getBattleEncounter(@PathVariable Long id) {
        return new ResponseEntity<>(battleEncounterRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/battleEncounters")
    public ResponseEntity<BattleEncounter> createBattleEncounter(@RequestBody BattleEncounter battleEncounter) {
        battleEncounterRepository.save(battleEncounter);
        return new ResponseEntity<>(battleEncounter, HttpStatus.CREATED);
    }
}
