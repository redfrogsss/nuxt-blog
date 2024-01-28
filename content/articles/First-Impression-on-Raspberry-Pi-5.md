---
title: First Impression on Raspberry Pi 5
created_date: 2024-01-28 23:20:00
Tags: Raspberry Pi 5, Large Language Models, LLMs, TinyLlama, TinyLlama 1.1B Model
author: Jacky FAN
description: Discover the capabilities of the Raspberry Pi 5, from its easy setup process to running Large Language Models (LLMs), and explore its potential for various projects in a cost-effective manner.
head:
    meta:
        - name: "keywords"
          content: "Raspberry Pi 5, Large Language Models, LLMs, TinyLlama, TinyLlama 1.1B Model"
        - name: "author"
          content: "Jacky FAN"
        - name: "copyright"
          content: "© 2024 Jacky FAN"
---

## Intro

A few days ago, I got myself a Raspberry Pi. It is a single board computer (SBC) that’s small yet powerful. I would like to see how it performs and where can I use it. Therefore, I did a few tests and I would like to share the results of what I did.

## Setting up Raspberry Pi

The setup process is super easy. Here are everything I need for the setup process.

1. Raspberry Pi 5
2. USB-C Power Supply
3. MicroSD Card with a card reader
4. A computer

Firstly, install Raspberry PI Imager from the official website and install OS to the microSD Card. I usually choose to install Ubuntu Server because I am more familiar with it.

![Untitled](/assets/img/First-Impression-on-Raspberry-Pi-5/01.png)

Then, setup the basic OS config. The imager app will apply the OS configure in the first boot.

![Untitled](/assets/img/First-Impression-on-Raspberry-Pi-5/02.png)

Then, wait for it to write the OS into the microSD card and boot the Raspberry Pi with it. The pi should boot the Ubuntu Server with the pre-defined config.

![Untitled](/assets/img/First-Impression-on-Raspberry-Pi-5/03.png)

Now I have a working Raspberry Pi 5 for testing.

![Untitled](/assets/img/First-Impression-on-Raspberry-Pi-5/04.png)

## Running LLMs on Raspberry Pi 5

A few days ago, I heard that Raspberry Pi 5 could run Large Language Models (LLMs). I was impressed by how much Raspberry Pi 5 could do and I would like to try running it myself.

Unfortunately, with Raspberry Pi 5’s CPU and its `arm64` architecture, I was unable to run `LocalAI` app like I did in the last blog post. However, thanks to a very useful article, I was able to run LLMs on Raspberry 5 with `llama.cpp`.

In shorts, here are the steps I took for running models.

```bash
sudo apt install g++ build-essential python3-pip -y
python3 -m pip install torch numpy sentencepiece

git clone https://github.com/ggerganov/llama.cpp && cd llama.cpp && make
wget https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/resolve/main/llama-2-7b-chat.Q4_0.gguf -P models/

./main -m ./models/llama-2-7b-chat.Q4_0.gguf -c 512 -b 1024 -n 256 --keep 48 --repeat_penalty 1.0 --color -i -r "User:" -f prompts/chat-with-bob.txt
```

Here is the result of Llama 2 7B Model.

![Untitled](/assets/img/First-Impression-on-Raspberry-Pi-5/05.png)

The text interface is laggy and a bit slow on the Raspberry Pi 5. Each response took around 20s ~ 2min but it is pretty accurate on some tasks.

With this opportunity, I also tried a very new LLM model called TinyLlama.

It is an open-source small language model released in January 2024 with decent performance and compact model size. Compare to Llama 2’s 7B parameters model, TinyLlama is a 1.1B parameters model which require a lot less power and more suitable for running on Raspberry Pi 5.

I use the same `llama.cpp` app to run the model with the following commands.

```bash
wget https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q4_0.gguf -P models/

./main -m ./models/tinyllama-1.1b-chat-v1.0.Q4_0.gguf -c 512 -b 1024 -n 256 --keep 48 --repeat_penalty 1.0 --color -i -r "User:" -f prompts/chat-with-bob.txt
```

Here is the result of TinyLlama 1.1B Model.

![Untitled](/assets/img/First-Impression-on-Raspberry-Pi-5/06.png)

The response are very fast and pretty accurate on the Raspberry Pi 5. Each response took around 10s ~ 30s to complete and the quality of the response is great. I think it is pretty good for using it in my future projects.

## Summary

In conclusion, the Raspberry Pi 5 proved to be a capable single board computer with the potential to run different applications such as Large Language Models (LLMs) and more. With its compact size and power efficiency, the Raspberry Pi 5 opens up exciting possibilities for different projects in a cost-effective manner.

## References

-   Raspberry Pi Imager - [https://github.com/raspberrypi/rpi-imager](https://github.com/raspberrypi/rpi-imager)

-   Running LLM (LLaMA) on Raspberry Pi 5 - [https://www.linkedin.com/pulse/running-llm-llama-raspberry-pi-5-marek-żelichowski-ykfbf/](https://www.linkedin.com/pulse/running-llm-llama-raspberry-pi-5-marek-żelichowski-ykfbf/)

-   llama-2-7b-chat.Q4_0.gguf · TheBloke/Llama-2-7B-Chat-GGUF at main - [https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/blob/main/llama-2-7b-chat.Q4_0.gguf](https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/blob/main/llama-2-7b-chat.Q4_0.gguf)

-   TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF · Hugging Face - [https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF](https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF)

-   TinyLlama: An Open-Source Small Language Model - [https://arxiv.org/abs/2401.02385](https://arxiv.org/abs/2401.02385)

-   TinyLlama: The Mini AI Model with a Trillion-Token Punch - [https://aibusiness.com/nlp/tinyllama-the-mini-ai-model-with-a-trillion-token-punch](https://aibusiness.com/nlp/tinyllama-the-mini-ai-model-with-a-trillion-token-punch)
