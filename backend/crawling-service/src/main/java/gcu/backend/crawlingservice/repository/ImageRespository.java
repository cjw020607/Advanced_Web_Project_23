package gcu.backend.crawlingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import gcu.backend.crawlingservice.model.Images;

@RepositoryRestResource
public interface ImageRespository extends JpaRepository<Images, Long> {

}
