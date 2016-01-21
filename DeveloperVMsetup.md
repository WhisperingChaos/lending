## Install
All commands assume 'sudo' (root) priviledges.
### Upgrade Ubuntu 12.04 kernel
* Purpose:
  * Update Docker Engine to required kernel 3.13
* References:
  * [Docker Install Instructions](https://docs.docker.com/engine/installation/ubuntulinux/)
* Packages
  * linux-image-generic-lts-trusty
  * xserver-xorg-lts-trusty
  * libgl1-mesa-glx-lts-trusty
* Install Instructions
  * apt-get update  
  * apt-get install --install-recommends linux-generic-lts-trusty xserver-xorg-lts-trusty libgl1-mesa-glx-lts-trusty
  
### Install Docker
 * Purpose: Provide image and container services.
 * Reference: 
 * Install Instructions:
   * apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
   * sh -c "echo deb https://apt.dockerproject.org/repo ubuntu-precise main\ > /etc/apt/sources.list.d/docker.list"
   * apt-get update
   * apt-get purge lxc-docker
   * apt-get install docker-engine
 Update Eclipse Nodeclipse
 * Purpose:
   * Update Eclipse Kepler and install Nodeclipse.  Nodeclipse configures Eclipse IDE to support node.js development.
 * Update Eclipse:
   * Start Eclipse and check for available updates.
   * Select the following updates:
     * Eclipse Git Team Provider	4.1.1.201511131810-r
     * Java implementation of Git	4.1.1.201511131810-r
   * Restart Eclipse and Update Kepler to use Java 8 as this is needed by latest nodeclipse
   * Reference: [Java 8 Kepler Update](https://wiki.eclipse.org/JDT/Eclipse_Java_8_Support_For_Kepler)
     * Select Help|Install New Software
     * Paste into "Work with:" http://download.eclipse.org/eclipse/updates/4.3-P-builds/
     * Select Eclipse Java 8 Support
     * Continue process to install Java 8 Support.
     * Restart Eclipse.
     * Due to errors regarding FireFox Update Firefoc
       *Purpose: Update firefox due to eclipse error during upgrade to java 8.
       * Verson 43.0.4
       * Install Instructions:
         * Start terminal and run "synaptic" command.
         * Find "firefox" and request update.
         * Apply update.
     * Java 8
       * Purpose: Install Java 8 Support to support nodeclipse.
       * Reference: http://ubuntuhandbook.org/index.php/2015/01/install-openjdk-8-ubuntu-14-04-12-04-lts/
       * Install Instructions:
         * Support only through PPA: add-apt-repository ppa:openjdk-r/ppa
         * apt-get update
         * apt-get install openjdk-8-jdk
         * Make sure that Java 8 is default: update-alternatives --config java
 ### Install curl
* Purpose:
  * Permit install of node.js
  * Install Instructions:
    * apt-get update
    * apt-get install curl
 ### Install node.js
   * Version: 0.12.9
   * Reference:
     * [nodesource.com](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories/)
   * Install Instructions:
     * curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
     * apt-get install -y nodejs
 ### Relocate Docker Local Repository
  * Purpose:
    * Each VM is organized into two partitions:
      * OS - An immutable partion - OS image and config settings that shouldn't change unless upgraded in a controlled fashion.
      * Data - A mutable workspace for user/system to persist data created by the user.
      The OS image is a relatively small partition, while the Workspace is a much larger one.  Since a user's Docker images should persist until removed by the owning user and since images can be relatively large, they should be stored to the user's mutable workspace.
  * Install Instructions:
    * service docker stop
    * mkdir "/home/<useraccount>/Desktop/.dockerRuntime" directory in user's workspace.
    * gedit "/etc/default/docker"
    * Add: DOCKER_OPTS="--graph=/home/secure/Desktop/.dockerRuntime"
    * Save the file & close gedit
    * Remove the runtime area created when docker first installed: rm r /var/lib/docker
    * service docker start
### Intergrate git & Eclipse
  * Reference: http://www.vogella.com/tutorials/EclipseGit/article.html
  * Install Instructions:
    * Create a 'git' repository root node: mkdir /home/<useraccount>/Desktop/git
    * Configure Eclipse to use this directory as default root node:
      * Window → Preferences → Team → Git → Configuration 
        * Change 'Location' field to reflect new root node.
      * display eclipse icons for git on eclipse's toolbar:
        *  Window+Perspective → Customize perspective
      * Personalize git user settings:
        * Window → Preferences → Team → Git → Configuration
          * Ensure correct values user.name & user.email
          * Add key: branch.autosetuprebase=always
      * Use Git repository menu:
        * to clone the lending project from git hub.
        * set github user's authentication
 ### Install Chrome
  * Purpose: Used with node inspector to remotely debug node.js in container
  * Reference: http://tecadmin.net/install-google-chrome-in-ubuntu/#
  * Install Instructions:
    * use synaptic package installer.
    * However to get latest version
      * wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
      * sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
      * apt-get update
      * apt-get install google-chrome-stable
     * Chrome Settings:
       *  disable Continue runnnig background apps when google chrome is closed.
       *  disable offer to save web passwords.
       *  set font size to large
       *  set as default browser
       *  enable do not track
       *  disable Adobe Flash Player
       *  block third party cookies
 ### Install HP7410 Printer Driver
  * Purpose: Provide printing from applicaitons.
  * Reference: https://help.ubuntu.com/community/HpAllInOne
  * Install Instructions:
    * start terminal
    * Answer prompts by: hp-setup -i 192.168.1.197
    * set HP7410 printer as the default in Chrome & Open Office.
 
