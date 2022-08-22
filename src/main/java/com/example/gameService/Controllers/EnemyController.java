package com.example.gameService.Controllers;

import com.example.gameService.Models.Characters.Enemy;
import com.example.gameService.Models.Characters.Player;
import com.example.gameService.Repositories.EnemyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EnemyController {

    @Autowired
    EnemyRepository enemyRepository;

    @GetMapping(value = "/enemies")
    public ResponseEntity<List<Enemy>> getAllEnemies() {
        return new ResponseEntity<>(enemyRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/enemies/{id}")
    public ResponseEntity<Optional<Enemy>> getEnemy(@PathVariable Long id) {
        return new ResponseEntity<>(enemyRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/enemies")
    public ResponseEntity<Enemy> createEnemy(@RequestBody Enemy enemy) {
        enemyRepository.save(enemy);
        return new ResponseEntity<>(enemy, HttpStatus.CREATED);
    }
}
