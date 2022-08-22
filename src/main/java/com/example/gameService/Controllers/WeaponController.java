package com.example.gameService.Controllers;

import com.example.gameService.Models.Weapons.Weapon;
import com.example.gameService.Repositories.WeaponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class WeaponController {

    @Autowired
    WeaponRepository weaponRepository;

    @GetMapping(value = "/weapons")
    public ResponseEntity<List<Weapon>> getAllWeapons() {
        return new ResponseEntity<>(weaponRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/weapons/{id}")
    public ResponseEntity<Optional<Weapon>> getWeapon(@PathVariable Long id) {
        return new ResponseEntity<>(weaponRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/weapons")
    public ResponseEntity<Weapon> createWeapon(@RequestBody Weapon weapon) {
        weaponRepository.save(weapon);
        return new ResponseEntity<>(weapon, HttpStatus.CREATED);
    }
}
