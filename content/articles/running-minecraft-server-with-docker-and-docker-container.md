---
title: Running Minecraft Server with Docker and docker-compose
author: Jacky FAN
created_date: 2024-02-01 21:42:00
tags: [Minecraft Server, Docker, docker-compose, Raspberry Pi 5, Spigot]
---

<img src="/assets/img/running-minecraft-server-with-docker-and-docker-container/01.png" alt="Screenshot of my minecraft server" class="rounded-lg shadow-lg">

## Intro

I was moving my Minecraft Server to my new Raspberry Pi 5 and I discovered that I had done something to the server setup in the past that saved me a lot of time, which was using docker-compose to set up the Minecraft Server.

The benefit of using docker-compose to set up the Minecraft Server is its ability to apply the same images and configurations to different machines. It saves me a lot of time in setting up applications and servers without reinstalling dependent software, such as Java JDK, Python, and so on, on a new machine.

## Run Minecraft Server with Docker and docker-compose

First of all, `Docker` and `docker-compose` must be installed. In my case, I simply use Ubuntu's `apt-get` command to install them.

```bash
sudo apt-get install docker docker-compose -y
sudo usermod -aG docker $USER
```

Then, download the Minecraft Server of your choice. I usually use Spigot because it supports plugins and has better performance compared to other Minecraft Server applications such as `CraftBukkit` or `Bukkit`.

```bash
mkdir myServer && cd myServer
wget https://download.getbukkit.org/spigot/spigot-1.19.4.jar
```

Then, create a new file named `Dockerfile` and input the following content.

`Dockerfile`

```docker
FROM openjdk:17-oracle

WORKDIR "/app"

CMD ["java", "-Xmx6G", "-jar", "spigot-1.19.4.jar", "nogui"]
```

This `Dockerfile` file defines an image built with an OpenJDK 17 image as the base image. It sets the working directory to `/app` in the container and provides a startup command. OpenJDK 17 will be used to start the Minecraft Server.

Then, create another new file named `docker-compose.yml` and input the following content.

`docker-compose.yml`

```yaml
version: '3'

services:
  server:
    restart: unless-stopped
    build:
      context: .
    ports:
      - "25565:25565/tcp"
      - "25565:25565/udp"
    volumes:
      - ".:/app"
```

This `docker-compose.yml` file defines a service named `server` with a restart policy of `unless-stopped`. It builds the image using the current directory as the build context and maps the container's ports 25565 for TCP and UDP traffic. It also creates a volume that mounts the current directory to the `/app` directory in the container for easy management of server files and configurations.

To start the Minecraft Server, navigate to the directory containing the `docker-compose.yml` file and execute the following command:

```bash
docker-compose up -d
```

The `-d` flag runs the containers in the background. The Minecraft Server should start up and be able to connect to it with the IP address of Raspberry Pi 5.

## Move Minecraft Server to Another Machine

Just copy all the files to the new machine and run `docker-compose up -d`. It should run just fine. 😂

## Summary

In summary, using Docker and docker-compose to run a Minecraft Server provides the advantage of easy setup and portability across different machines. By defining the server configuration in a Dockerfile and docker-compose.yml, the server can be quickly deployed and managed. Additionally, moving the Minecraft Server to a new machine is as simple as copying the files and running `docker-compose up -d`.