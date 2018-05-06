+++
title = "i3 Window Management"
date = 2017-11-15T00:00:00-05:00
lastmod = 2017-11-15T16:19:14-05:00
weight = 1002
draft = false
+++

I just started using i3 window manager and I love it. This will be the window manager for all of my Linux distros (Xubuntu and Manjaro). Here are some basics


## Fundamentals {#fundamentals}


### Installations {#installations}

-   Install on Ubuntu

```sh
sudo apt-get install i3
```

-   Login

Choose i3 as login
{{<figure src="./img/i3/i3-login.PNG">}}

Generate config file
{{<figure src="./img/i3/i3-config-file.PNG">}}

I choose the super key/Windows key for the modifier key


### Get Started {#get-started}

-   open a terminal use `Mod Enter`
-   find a program to open use `Mod D` to open a buffer (D menu) and enter the program
-   i3 can also open a GUI folder
    -   `Mod D` to trigger the D menu
    -   xdg-open /path e.g. xdg-open ~/Home/Downloads
-   quit use `Shift Mod Q`

{{<figure src="./img/i3/i3-d-menu.PNG">}}


### Window Tiling {#window-tiling}

Let's use terminal for demo here. So first:
First, let's open an terminal with `Mod Enter`
{{<figure src="./img/i3/i3-tile-window-1.PNG">}}

Then open another terminal, i3 will automatically tile it evenly
{{<figure src="./img/i3/i3-tile-window-2.PNG">}}

We can tile as many as windows, until it looks hedious:
{{<figure src="./img/i3/i3-tile-window-3.PNG">}}


### Window Management {#window-management}

There are four important window management skills


#### Move Into Another Window {#move-into-another-window}

Very intuitive, just use `Mod <arrow keys>`, for example, right now, I'm at the left terminal

{{<figure src="./img/i3/i3-move-window-before.PNG">}}

if I want to move to the right window, just enter `Mod Right` (or on linux `Mod l`)
{{<figure src="./img/i3/i3-move-window-after.PNG">}}
Note the blue cursor moved to terminal 2. Can shuffle between windows with `Mod Right` and `Mod Left`

Similarly, we can use `Mod Up` `Mod Down` for horizontal split.


#### Direction {#direction}

For now, i3 will automatically tile the windows horizontally. How about open windows vertically? Just use `Mod v` and open a new window

I'm currently at a single terminal
{{<figure src="./img/i3/i3-tile-vertical-1.PNG">}}

press `Mod v` and then press `Mod Enter`
{{<figure src="./img/i3/i3-tile-vertical-2.PNG">}}

This a really neat feature. We can easily make something complicated as this
{{<figure src="./img/i3/i3-tile-complex.PNG">}}


#### Resizing {#resizing}

to resize the window, trigger the resize with `Mod R` and it will display a red "Resize" at the bottom left
{{<figure src="./img/i3/i3-resize.PNG">}}

Then use arrow keys to resize the focus window, see below
{{<figure src="./img/i3/i3-resized-tiles.PNG">}}

To exit the resize mode, use `ESC` key


#### Shift window {#shift-window}

We can also do a bunch of crazy stuff to shift windows with `Shift Mod Arrow Keys`
Here's a shifted window results
{{<figure src="./img/i3/i3-tile-shift.PNG">}}


#### Windows in different display mode {#windows-in-different-display-mode}

There are three different window display mode

1.  Stack Mode

    Use `Mod S` key to conver to stack mode and use `Mod Arrow` key to navigate among different windows
    {{<figure src="./img/i3/i3-stack.PNG">}}

2.  Tab Mode

    Use `Mod W` to convert to tab mode
    {{<figure src="./img/i3/i3-tab.PNG">}}

3.  Tile Mode

    To get back to the tile mode, use `Mod E` key


### Workstations {#workstations}

One of the best features. Made me think about Mac's multiple desktop function


#### Create a new workstation {#create-a-new-workstation}

Use `Shift Mod Number` to create a workstation, and there will be a numbered list of workstations at left bottom
{{<figure src="./img/i3/i3-workstations.PNG">}}

Then just use `Mod Number` to go to that workstation


## Config {#config}

The i3 config file is in `.config/i3/config`. If the config was not created, we can use `i3-config-wizard`

To add a keybinding, go to the config file and enter

```sh
bindsym $mod+shift+x exec i3lock
```

Then use `Shift mod R` to restart i3

To learn more about customization via config file, read [i3 Documentation](https://i3wm.org/)'s [user's guide](https://i3wm.org/docs/userguide.html).

Also this [youtube video](https://youtu.be/ARKIwOlazKI) is a great place to learn more about customization and config as well.
