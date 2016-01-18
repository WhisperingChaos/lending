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
