package com.site.andressaagencia1.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.andressaagencia1.entities.Contato;	

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {

}
