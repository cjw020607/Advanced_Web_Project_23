package gcu.backend.crawlingservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CrawlingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrawlingServiceApplication.class, args);
	}

}
