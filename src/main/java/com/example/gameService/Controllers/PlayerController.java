package com.example.gameService.Controllers;

import com.example.gameService.Models.Characters.Player;
import com.example.gameService.Models.Weapons.Weapon;
import com.example.gameService.Repositories.PlayerRepository;
import com.example.gameService.Repositories.WeaponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping(value = "/players")
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/players/{id}")
    public ResponseEntity<Optional<Player>> getPlayer(@PathVariable Long id) {
        return new ResponseEntity<>(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/players")
    public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }
}
