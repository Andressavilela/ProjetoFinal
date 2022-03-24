package com.site.andressaagencia1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.andressaagencia1.entities.Contato;
import com.site.andressaagencia1.repositorys.ContatoRepository;

@SpringBootApplication
public class Andressaagencia1Application implements CommandLineRunner {

	
	@Autowired
	private ContatoRepository contatoRepository;
	
	
	public static void main(String[] args) {
		SpringApplication.run(Andressaagencia1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
			
		
		Contato a1 = new Contato(null, "Andressa", "andressa@hotmail.com");
		Contato a2 = new Contato(null, "João", "joao@joão");
		
		contatoRepository.save(a1);
		contatoRepository.save(a2);
		
	}

}
