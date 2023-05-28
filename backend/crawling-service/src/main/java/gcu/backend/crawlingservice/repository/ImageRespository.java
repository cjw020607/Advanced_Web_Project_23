package gcu.backend.crawlingservice.repository;

import org.bson.types.ObjectId;

import org.springframework.data.mongodb.repository.MongoRepository;

import gcu.backend.crawlingservice.model.Images;

public interface ImageRespository extends MongoRepository<Images, ObjectId> {

}
