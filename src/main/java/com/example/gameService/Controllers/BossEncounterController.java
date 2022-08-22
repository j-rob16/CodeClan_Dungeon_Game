package com.example.gameService.Controllers;

import com.example.gameService.Models.Encounters.BossEncounter;
import com.example.gameService.Repositories.BossEncounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BossEncounterController {

    @Autowired
    BossEncounterRepository bossEncounterRepository;

    @GetMapping(value = "/bossEncounters")
    public ResponseEntity<List<BossEncounter>> getAllBossEncounters() {
        return new ResponseEntity<>(bossEncounterRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/bossEncounters/{id}")
    public ResponseEntity<Optional<BossEncounter>> getBossEncounter(@PathVariable Long id) {
        return new ResponseEntity<>(bossEncounterRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bossEncounters")
    public ResponseEntity<BossEncounter> createBossEncounter(@RequestBody BossEncounter bossEncounter) {
        bossEncounterRepository.save(bossEncounter);
        return new ResponseEntity<>(bossEncounter, HttpStatus.CREATED);
    }
}
