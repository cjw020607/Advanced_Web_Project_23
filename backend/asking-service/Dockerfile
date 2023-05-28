FROM openjdk:17-jdk-slim
WORKDIR ./
ARG JAR_FILE_PATH=target/*.jar
COPY ${JAR_FILE_PATH} app.jar

RUN apk update && apk add bash
COPY wait-for-it.sh wait-for-it.sh
RUN chmod +x wait-for-it.sh