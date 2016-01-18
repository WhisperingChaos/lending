## Install
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
   * sh -c "echo deb https://apt.dockerproject.org/repo ubuntu-precise main\ > /etc/apt/sources.list.d/docker.listdeb"
   * apt-get update
 
