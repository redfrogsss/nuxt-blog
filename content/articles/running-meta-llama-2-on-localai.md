---
created_date: 2023-07-24 12:23
Tags: Meta, Microsoft, Llama 2, LocalAI, C++, PyTorch, GGML, ChatWizard
author: Jacky FAN
description: This blog post provides a guide on how to run Meta's new language model, Llama 2, on LocalAI. It includes an overview of Llama 2 and LocalAI, as well as a step-by-step guide on how to set up and run the language model on your own computer. The author also shares their thoughts on Llama 2's performance in answering questions, generating programming code, and writing documents.
---

## Introduction

Recently, a new language model Llama-2 is publicly available from Meta. With this opportunity, I would like to have a try to run it and see how it performs. Therefore, I would like to write this blog post to share how do I run the language model on my own computer and access it via api, as well as my thought about this new model.

## Background

Here are some items that you might need to know in order to understand what is happening.

### Llama 2

In July 18 2023, [Meta and Microsoft](https://about.fb.com/news/2023/07/llama-2/) released an new open source language model named **Llama 2**. It is a language model that generate text and code based on user’s prompt, which is similar to what ChatGPT does. Also, it is trained with publicly available data from the internet.

Llama 2 is open-source and free to use for research and commercial use, meaning it is allowed to be adapted to any projects and products without paying a fee. As for now, Llama 2 is accessible via [Meta’s website](https://ai.meta.com/resources/models-and-libraries/llama-downloads/), Microsoft Azure AI, [Hugging Face](https://huggingface.co/meta-llama/Llama-2-13b-chat-hf) and so on.

### LocalAI

With the rapid development of AI, the open source community have built different tools which aims to let language model more easily accessible to everyone.

[LocalAI](https://github.com/go-skynet/LocalAI) is a open source, self-hosted local OpenAI-compatible API that run LLMs on consumer-grade hardware. It is a REST API server that accept HTTP request and return generated response from LLM as an HTTP response. It is designed to be a drop-in replacement for OpenAI’s API specification, meaning that it is compatible with most projects and software that uses OpenAI’s API.

### Llama.cpp

The key element for LocalAI to running LLMs is a project called llama.cpp. It is a open source inference code that aims to run the previous LLaMa model and other LLMs on a consumer-grade computers instead of powerful computers.

The unique feature for llama.cpp is that it uses plain C / C++ implementation for development, meaning it does not have any dependencies and it could run purely on CPU. Also, this project uses quantization to reduce sizes of the LLM.

### PyTorch model and GGML model

Most LLMS are originally released as PyTorch. It is because most models uses PyTorch Framework to train the model. However, llama.cpp does not support PyTorch model. Therefore, most people would convert the model weights to [GGML format](https://github.com/ggerganov/ggml) for running on llama.cpp.

On Hugging Face website, a user named [TheBloke](https://huggingface.co/TheBloke) has converted most of the latest language models into different format, including GGML. As a result, we could access the GGML version of the model without running [the convert script](https://github.com/ggerganov/ggml/discussions/65) by ourselves.

## Setup and Run Llama 2

For running the model, I am using a computer with an i5 cpu and 16GB of ram. Here is the spec of the computer.

![Untitled](/running-meta-llama-2-on-localai/01.png)

To run the model, I would setup the LocalAI using docker-compose, then download [the model](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML) and run it.

### Clone LocalAI Project

Just clone the LocalAI project from GitHub.

```bash
# Clone LocalAI project
git clone https://github.com/go-skynet/LocalAI.git
cd LocalAI
```

### Download the model

The GGML version of the Llama 2 models are available on [Hugging Face website](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML). Noted that there are multiple version with different speed and accuracy. It is because different quantization were applied to reduce the size of the model. For testing the new model, I choose the q5_0 version.

```bash
# Download the model to `models` folder
wget -P ./models https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML/resolve/main/llama-2-13b-chat.ggmlv3.q5_0.bin

# Create Prompt Template
vim ./models/llama-2-13b-chat.ggmlv3.q5_0.bin.temp
```

For the prompt template, it is worth knowing that different language model has different prompt template. For example, from [the model’s Hugging Face website](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML), the prompt template could be found in the description. The propose of the template is to let the model know how to accept user’s prompt and response to it. In LocalAI, the user prompt is represented as `{{.Input}}`.

If there is no prompt template, the model will read user’s prompt and continue the sentences.

`llama-2-13b-chat.ggmlv3.q4_1.bin.temp`

```
SYSTEM: You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.
USER: {{.Input}}
ASSISTANT:
```

### Change the port to 8081 (Optional)

By default, LocalAI uses port `8080`. However, in my computer, port `8080` is already allocated by NextCloud. Therefore, I need to change the port to 8081.

To do so, edit the `docker-compose.yaml` and update the port from `8080:8080` to `8081:8080`.

```bash
vim docker-compose.yaml
```

`docker-compose.yaml`

```yaml
ports:
    - 8081:8080
```

### Run LocalAI via docker-compose

LocalAI support running via docker-compose, which is more easy to use and configure. Therefore, I use docker-compose to run LocalAI. Run the following commands to start it up.

```bash
# Run LocalAI via docker-compose in the background
docker-compose up -d

# (Optional) Watch the log of LocalAI
docker ps      # find the container ID
docker logs -f <container ID>
```

When the following text is shown in the log, you can start loading the model and use it. Noted that the url in the terminal output does not show the port changes.

```
 ┌───────────────────────────────────────────────────┐
 │                   Fiber v2.47.0                   │
 │               http://127.0.0.1:8080               │
 │       (bound on host 0.0.0.0 and port 8080)       │
 │                                                   │
 │ Handlers ............ 31  Processes ........... 1 │
 │ Prefork ....... Disabled  PID ................. 7 │
 └───────────────────────────────────────────────────┘
```

To check and load the model, run the following commands.

```bash
# Check whether LocalAI detect the model
curl http://localhost:8081/v1/models

# Access the model
curl http://localhost:8081/v1/completions -H "Content-Type: application/json" -d '{
     "model": "llama-2-13b-chat.ggmlv3.q5_0.bin",
     "prompt": "Who are you?",
     "temperature": 0.7
   }'
```

When sending the first request to LocalAI, it will take some time to load the model and store it to RAM, so it does not require loading for the next prompt.

The response result is as follow:

![Untitled](/running-meta-llama-2-on-localai/02.png)

```
Hello! I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. My primary goal is to assist and provide helpful responses to your questions while ensuring a safe and respectful interaction. I am trained on a massive dataset of text from the internet and can generate human-like responses. Please feel free to ask me anything, and I will do my best to assist you!
```

Hello, LLaMA. ✋🏻

At this point, the API is already setup. I could use it for any of my side projects or any other purpose.

## Fully utilizing the LocalAI API

Sending HTTP request manually is slow and I hate it. I want to use the model without sending HTTP requests by myself. I want some client app to do the same thing and fully utilize the api. Therefore, I am going to use ChatWizard, an open source OpenAI chat client desktop app, which is specificly design for OpenAI’s API.

But before using the client app, some setup need to be done.

### Changing the name of the model

For this type of client app, they are hardcoded to use gpt-3.5-turbo and gpt-4 model. Therefore, I need to change the name of the model to gpt-3.5-turbo to trick the client app.

Here is how I do it.

```
# Rename model and prompt template
cd models
mv llama-2-13b-chat.ggmlv3.q4_1.bin gpt-3.5-turbo
mv llama-2-13b-chat.ggmlv3.q4_1.bin.tmpl gpt-3.5-turbo.tmpl

# Restart LocalAI
docker-compose restart
```

Then, in the ChatWizard app setting, change the `Forward Url` to the api’s url.

![Untitled](/running-meta-llama-2-on-localai/03.png)

Then, start the conversation with the model.

![Untitled](/running-meta-llama-2-on-localai/04.png)

Hello again, LLaMA. ✋🏻

## Trying the new Llama 2 model

Finally! It is time to try the new Llama 2 model. I will try some use cases that I usually use, such as answering facts, solving programming problems and writing documents.

However, please noted that I am using the 13B version of the LLaMA model, which is not the most powerful one. The most powerful one is the 70B version of LLaMa model, which uses a lot of computer resource and difficult to run on customer graded computer.

### Answering Facts

Let’s start by asking some facts.

![Untitled](/running-meta-llama-2-on-localai/05.png)

The response looks helpful and descriptive. Also, the model can continue the conversation based on previous conversation.

### Programming

Then, let’s see how Llama 2 handle programming.

![Untitled](/running-meta-llama-2-on-localai/06.png)

![Untitled](/running-meta-llama-2-on-localai/07.png)

Unfortunately, it is unethical to ask Llama 2 to create code and I need to pay AI to generate code for me. 🥺

Jokes aside, it seems like Llama 2 model could understand user’s requirement and generate some code for it.

However, the response cut off in the middle of the response and did not finish the whole response. It seems like the LocalAI crashed while responding.

When I try to use the code provided by the model, I found several problems in the code:

1. An error `SyntaxError: await is only valid in async functions and the top level bodies of modules` shows up on line 12. It seems like Llama 2 uses the keyword `await` inside a non `async` function.
2. On line 7, error `ReferenceError: fs is not defined` shows up.

By manually fixing them, it does run. However, I wonder: can Llama 2 fix its code?

So I try it. And this is the response.

![Untitled](/running-meta-llama-2-on-localai/08.png)

It does try to fix the issues but it also changes the package from `sharp` to `image-resize` as well, which it doesn’t work.

### Writing Documents

Let’s start with a simple cover letter.

![Untitled](/running-meta-llama-2-on-localai/09.png)

It performs pretty well. The letter perfectly fits into the situation. This is a letter that I would actually use for job application (if I need to). Well done.

Then, let’s try some informal type of documents.

![Untitled](/running-meta-llama-2-on-localai/10.png)

It is a bit longer than I expected but it gets the point. The tone is friendly and polite.

However, there are some unknown symbols at the end of the sentence. My first thought was that the symbols might be some sort of emoji. But I could type emoji and display it on the client app, which might indicates that the symbols are not emoji. 🤔

## Conclusion

In conclusion, Llama 2 is an exciting new language model that is open source and free to use for research and commercial use.

By using LocalAI, I was able to run the language model on my own computer and access it via API. Overall, I found that Llama 2 performed well in answering questions, generating programming code, and writing documents.

However, there were some issues with the generated code that would need to be fixed or improved before it could be used.

In general, I am impressed with Llama 2 and look forward to seeing how it is used in the future.

## Reference

[Meta and Microsoft Introduce the Next Generation of Llama | Meta](https://about.fb.com/news/2023/07/llama-2/)

[TheBloke/Llama-2-13B-chat-GGML · Hugging Face](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML)

[Getting started :: LocalAI documentation](https://localai.io/basics/getting_started/index.html)

[GitHub - ggerganov/llama.cpp: Port of Facebook's LLaMA model in C/C++](https://github.com/ggerganov/llama.cpp)

[GitHub - ggerganov/ggml: Tensor library for machine learning](https://github.com/ggerganov/ggml)
