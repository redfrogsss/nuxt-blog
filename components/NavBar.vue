<template>
    <div class="navbar bg-base-100 shadow-md">
        <div class="flex-1">
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Jacky FAN's Blog</NuxtLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1 hidden md:flex">
                <li>
                    <NuxtLink to="/" class="prose">Home</NuxtLink>
                </li>
                <li><a href="https://jacky.fan" target="_self" class="prose">About Me</a></li>
            </ul>
        </div>
    </div>
</template>