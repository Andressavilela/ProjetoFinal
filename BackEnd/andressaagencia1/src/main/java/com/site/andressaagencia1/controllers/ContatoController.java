package com.site.andressaagencia1.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.site.andressaagencia1.entities.Contato;
import com.site.andressaagencia1.repositorys.ContatoRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value ="/Contatos")
public class ContatoController {

	@Autowired
	private ContatoRepository contatoRepository;
	
	
		
	@GetMapping
	public ResponseEntity<List<Contato>> findAll() {
		
		List<Contato> contatos = contatoRepository.findAll();
		
		return ResponseEntity.ok().body(contatos);
		
	}

	@GetMapping(value = "/{id}")

	public ResponseEntity<Contato> findById (@PathVariable Long id) {
	
	Contato contato = contatoRepository.findById(id).get();
	
	return ResponseEntity.ok().body(contato);
		
	}

	
	@PostMapping
	public Contato create(@RequestBody Contato contato) {
		
		
		return contatoRepository.save(contato);
	}

	
	@PutMapping("{id}")
	public ResponseEntity<Contato> update(@PathVariable long id,@RequestBody Contato contatoDetails) {
		Contato updateContato = contatoRepository.findById(id).get();
		
		updateContato.setNome(contatoDetails.getNome());
		
		updateContato.setEmail(contatoDetails.getEmail());	
				
		contatoRepository.save(updateContato);
		
		return ResponseEntity.ok(updateContato);
					
	}
	
	
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
	
		Contato contato = contatoRepository.findById(id).get();
	
		contatoRepository.delete(contato);
	
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);	
	}
	
}	