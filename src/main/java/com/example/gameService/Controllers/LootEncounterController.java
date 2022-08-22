package com.example.gameService.Controllers;

import com.example.gameService.Models.Encounters.LootEncounter;
import com.example.gameService.Repositories.LootEncounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LootEncounterController {

    @Autowired
    LootEncounterRepository lootEncounterRepository;

    @GetMapping(value = "/lootEncounters")
    public ResponseEntity<List<LootEncounter>> getAllLootEncounters() {
        return new ResponseEntity<>(lootEncounterRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/lootEncounters/{id}")
    public ResponseEntity<Optional<LootEncounter>> getLootEncounter(@PathVariable Long id) {
        return new ResponseEntity<>(lootEncounterRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/lootEncounters")
    public ResponseEntity<LootEncounter> createLootEncounter(@RequestBody LootEncounter lootEncounter) {
        lootEncounterRepository.save(lootEncounter);
        return new ResponseEntity<>(lootEncounter, HttpStatus.CREATED);
    }
}
